import { AlertTriangle, Check } from 'lucide-react';
import { AppleIcon, GooglePlayIcon } from './StoreIcons';

export const DownloadSection = () => {
  return (
    <section id="download" className="landing-section" style={{ textAlign: 'center', background: 'var(--bg2)' }}>
      <div className="download-inner">
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Get the App</div>
        <h2 className="section-title reveal">Make Smarter Cricket<br /><span style={{ color: 'var(--accent)' }}>Decisions with AI</span></h2>
        <p className="section-sub reveal">All predictions, player impact scores, live match momentum and venue intelligence — in your pocket.</p>
        <div className="app-btns reveal">
          <button type="button" className="app-btn" aria-label="Download on Google Play">
            <span className="app-btn-icon" aria-hidden>
              <GooglePlayIcon />
            </span>
            <div className="app-btn-text">
              <div className="small">GET IT ON</div>
              <div className="big">Google Play</div>
            </div>
          </button>
          <button type="button" className="app-btn" aria-label="Download on App Store">
            <span className="app-btn-icon" aria-hidden>
              <AppleIcon />
            </span>
            <div className="app-btn-text">
              <div className="small">DOWNLOAD ON THE</div>
              <div className="big">App Store</div>
            </div>
          </button>
        </div>
        <div className="trust-line reveal">
          <Check className="w-4 h-4 shrink-0" aria-hidden />
          <span>Used by 100,000+ cricket fans across 40+ countries daily</span>
        </div>
        <div className="disclaimer">
          <AlertTriangle className="w-4 h-4 shrink-0 inline-block align-text-bottom" aria-hidden />
          {' '}<strong>Disclaimer:</strong> AICRIX provides AI-generated match analysis and probability estimates for informational and entertainment purposes only. Predictions are based on statistical models and do not guarantee outcomes. AICRIX does not facilitate, encourage, or endorse betting or gambling of any kind. Always make informed personal decisions.
        </div>
      </div>
    </section>
  );
};
