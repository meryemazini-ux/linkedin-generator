import Head from 'next/head';

export default function LogiTerre() {
  const handleRecrutement = () => {
    alert('Recrutement Plug & Match — Inscription en cours...');
  };

  const handleReseautage = () => {
    alert('Réseautage B2B — Inscription en cours...');
  };

  const handleMasterclass = () => {
    alert('Académie Masterclass — Inscription en cours...');
  };

  return (
    <>
      <Head>
        <title>3ème LogiTerre — LinkedIn Local Morocco</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.page}>
        {/* ─── PATRONAGE ─────────────────────────────────────────── */}
        <div style={styles.patronage}>
          <p style={styles.arabic}>
            تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله
          </p>
          <p style={styles.patronageFr}>
            SOUS LE HAUT PATRONAGE DE SA MAJESTÉ LE ROI MOHAMMED VI, QUE DIEU L'ASSISTE
          </p>
          <p style={styles.patronageEn}>
            UNDER THE HIGH PATRONAGE OF HIS MAJESTY KING MOHAMMED VI MAY GOD ASSIST HIM
          </p>
        </div>

        {/* ─── LOGOS ROW ─────────────────────────────────────────── */}
        <div style={styles.logosRow}>
          <div style={styles.logoBox}>
            <div style={styles.logoCircle}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#c8102e', lineHeight: 1.2 }}>
                RÉGION<br />CASABLANCA<br />SETTAT
              </span>
            </div>
          </div>
          {['MINISTÈRE DE LA TRANSITION ÉNERGÉTIQUE ET DU DÉVELOPPEMENT DURABLE',
            'وزارة الإنتقال الطاقي و التنمية المستدامة',
            'MINISTÈRE DU TRANSPORT ET DE LA LOGISTIQUE',
            'وزارة النقل و اللوجستيك'].map((name, i) => (
            <div key={i} style={styles.logoBox}>
              <div style={styles.logoBadge}>
                <div style={styles.moroccoFlag}></div>
                <span style={{ fontSize: 8, color: '#ccc', textAlign: 'center', lineHeight: 1.3 }}>
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ─── MAIN BANNER ───────────────────────────────────────── */}
        <div style={styles.banner}>
          {/* Event Logo */}
          <div style={styles.eventLogoWrap}>
            <div style={styles.eventLogo}>
              <span style={styles.logoNumEme}>3<sup style={{ fontSize: 14 }}>ème</sup></span>
              <div style={styles.globeWrap}>
                <div style={styles.globe}>🌍</div>
                <span style={styles.logoGiText}>gi</span>
              </div>
              <span style={styles.logoTerre}>Terre</span>
              <div style={styles.edition}>
                <span style={styles.editionText}>Édition</span>
              </div>
            </div>
            <div style={styles.forumText}>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 600, letterSpacing: 1 }}>
                FORUM-SALON INTERNATIONAL
              </p>
              <p style={{ margin: 0, fontSize: 10, letterSpacing: 1 }}>
                MOBILITÉ-TRANSPORT-LOGISTIQUE
              </p>
            </div>
            <div style={styles.dateBadge}>
              <div style={styles.dateBadgeInner}>
                <span style={{ fontSize: 22, fontWeight: 900, display: 'block' }}>20 AU 22</span>
                <span style={{ fontSize: 13, fontWeight: 700 }}>OCTOBRE 2026</span>
              </div>
              <div style={styles.dateDivider}></div>
              <div style={styles.locationBox}>
                <span style={{ fontSize: 14, fontWeight: 900, display: 'block' }}>CASABLANCA</span>
                <span style={{ fontSize: 9 }}>FOIRE INTERNATIONALE - AMDIE</span>
              </div>
            </div>
          </div>

          {/* Meeting photo placeholder */}
          <div style={styles.photoWrap}>
            <div style={styles.photoPlaceholder}>
              <div style={styles.photoOverlay}></div>
              <div style={styles.photoContent}>
                <div style={styles.tableIcon}>🪑</div>
                <div style={styles.meetingChairs}>
                  <span style={styles.chair}>👤</span>
                  <span style={styles.chair}>👤</span>
                  <span style={styles.chair}>👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Local Morocco */}
          <div style={styles.linkedinSection}>
            <div style={styles.linkedinTitle}>
              <span style={styles.linkedinWord}>Linked</span>
              <span style={styles.linkedinIn}>in</span>
              <span style={styles.linkedinWord}> Local</span>
            </div>
            <div style={styles.moroccoText}>MOROCCO</div>
          </div>

          {/* Subtitle */}
          <div style={styles.subtitle}>
            <p style={styles.subtitleMain}>Recrutement, Networking et Masterclass</p>
            <p style={styles.subtitleSub}>- Le Dispositif Complet -</p>
          </div>

          {/* ─── CLICKABLE BUTTONS ─────────────────────────────── */}
          <div style={styles.buttonsRow}>
            <button
              style={styles.btn}
              onClick={handleRecrutement}
              onMouseEnter={e => Object.assign(e.currentTarget.style, styles.btnHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, styles.btn)}
            >
              Recrutement Plug &amp; Match
            </button>
            <button
              style={styles.btn}
              onClick={handleReseautage}
              onMouseEnter={e => Object.assign(e.currentTarget.style, styles.btnHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, styles.btn)}
            >
              Réseautage B2B
            </button>
            <button
              style={styles.btn}
              onClick={handleMasterclass}
              onMouseEnter={e => Object.assign(e.currentTarget.style, styles.btnHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, styles.btn)}
            >
              Académie Masterclass
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ──────────────── STYLES ──────────────── */
const DARK_BLUE  = '#0a3d7a';
const MID_BLUE   = '#1055a5';
const LIGHT_BLUE = '#2575c4';
const WHITE      = '#ffffff';
const GOLD       = '#f5c518';

const styles = {
  page: {
    minHeight: '100vh',
    background: `
      linear-gradient(135deg, ${DARK_BLUE} 0%, ${MID_BLUE} 50%, ${LIGHT_BLUE} 100%)
    `,
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 38px,
        rgba(255,255,255,0.04) 38px,
        rgba(255,255,255,0.04) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 38px,
        rgba(255,255,255,0.04) 38px,
        rgba(255,255,255,0.04) 40px
      ),
      linear-gradient(135deg, ${DARK_BLUE} 0%, ${MID_BLUE} 50%, ${LIGHT_BLUE} 100%)
    `,
    fontFamily: "'Segoe UI', Arial, sans-serif",
    color: WHITE,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  /* patronage */
  patronage: {
    width: '100%',
    background: 'rgba(255,255,255,0.10)',
    borderBottom: '3px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
    padding: '18px 24px',
  },
  arabic: {
    direction: 'rtl',
    fontSize: 18,
    fontWeight: 700,
    margin: '0 0 6px',
    lineHeight: 1.6,
  },
  patronageFr: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.5,
    margin: '0 0 4px',
  },
  patronageEn: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.5,
    margin: 0,
    opacity: 0.9,
  },

  /* logos */
  logosRow: {
    width: '100%',
    background: 'rgba(255,255,255,0.08)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    padding: '12px 24px',
    flexWrap: 'wrap',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
  },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    textAlign: 'center',
  },
  logoBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    maxWidth: 90,
  },
  moroccoFlag: {
    width: 32,
    height: 20,
    background: 'linear-gradient(180deg, #c1272d 100%)',
    borderRadius: 2,
    position: 'relative',
    overflow: 'hidden',
  },

  /* main banner */
  banner: {
    width: '100%',
    maxWidth: 960,
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },

  /* event logo */
  eventLogoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  eventLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    position: 'relative',
  },
  logoNumEme: {
    fontSize: 72,
    fontWeight: 900,
    color: WHITE,
    lineHeight: 1,
  },
  globeWrap: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: -4,
  },
  globe: {
    fontSize: 52,
    lineHeight: 1,
  },
  logoGiText: {
    fontSize: 64,
    fontWeight: 900,
    color: WHITE,
    marginLeft: -8,
    lineHeight: 1,
  },
  logoTerre: {
    fontSize: 64,
    fontWeight: 900,
    color: WHITE,
    lineHeight: 1,
  },
  edition: {
    position: 'absolute',
    bottom: -16,
    right: 0,
  },
  editionText: {
    fontStyle: 'italic',
    fontSize: 22,
    fontWeight: 600,
    color: GOLD,
  },
  forumText: {
    color: WHITE,
    textAlign: 'left',
    marginTop: 16,
  },
  dateBadge: {
    border: `3px solid ${WHITE}`,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'stretch',
    overflow: 'hidden',
    marginLeft: 16,
  },
  dateBadgeInner: {
    background: 'transparent',
    padding: '10px 16px',
    textAlign: 'center',
  },
  dateDivider: {
    width: 2,
    background: WHITE,
  },
  locationBox: {
    padding: '10px 16px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  /* photo */
  photoWrap: {
    width: '100%',
    maxWidth: 600,
  },
  photoPlaceholder: {
    width: '100%',
    height: 220,
    background: 'rgba(0,0,0,0.25)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  photoOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,80,0.3) 100%)',
  },
  photoContent: {
    textAlign: 'center',
    zIndex: 1,
  },
  tableIcon: {
    fontSize: 40,
  },
  meetingChairs: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    marginTop: 8,
  },
  chair: {
    fontSize: 28,
  },

  /* linkedin */
  linkedinSection: {
    textAlign: 'center',
    lineHeight: 1.1,
  },
  linkedinTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  linkedinWord: {
    fontSize: 56,
    fontWeight: 900,
    color: WHITE,
  },
  linkedinIn: {
    fontSize: 40,
    fontWeight: 900,
    background: '#0077B5',
    color: WHITE,
    borderRadius: 8,
    padding: '2px 10px',
    lineHeight: 1.3,
  },
  moroccoText: {
    fontSize: 60,
    fontWeight: 900,
    color: WHITE,
    letterSpacing: 6,
    marginTop: 4,
  },

  /* subtitle */
  subtitle: {
    textAlign: 'center',
  },
  subtitleMain: {
    fontSize: 22,
    fontWeight: 700,
    margin: '0 0 4px',
  },
  subtitleSub: {
    fontSize: 16,
    margin: 0,
    opacity: 0.85,
    fontStyle: 'italic',
  },

  /* buttons */
  buttonsRow: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },
  btn: {
    background: 'transparent',
    border: `2px solid ${WHITE}`,
    color: WHITE,
    borderRadius: 30,
    padding: '12px 28px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: 0.5,
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  },
  btnHover: {
    background: WHITE,
    border: `2px solid ${WHITE}`,
    color: DARK_BLUE,
    borderRadius: 30,
    padding: '12px 28px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: 0.5,
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  },
};
