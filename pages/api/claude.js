export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Methode non autorisee' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt manquant' });
  }

  const clientPassword = req.headers['x-client-password'];
  if (process.env.CLIENT_PASSWORD && clientPassword !== process.env.CLIENT_PASSWORD) {
    return res.status(401).json({ error: 'Acces non autorise' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
                                        method: 'POST',
                                        headers: {
                                          'Content-Type': 'application/json',
                                          'x-api-key': process.env.ANTHROPIC_API_KEY,
                                          'anthropic-version': '2023-06-01',
                                        },
                                        body: JSON.stringify({
                                                                     model: 'claude-opus-4-6',
                                                                     max_tokens: 8096,
                                                                     messages: [{ role: 'user', content: prompt }],
                                        }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error: error.error?.message || 'Erreur API' });
    }

    const data = await response.json();
    return res.status(200).json({ content: data.content[0].text });
  } catch (error) {
    return res.status(500).json({ error: 'Erreur serveur interne' });
  }
}
