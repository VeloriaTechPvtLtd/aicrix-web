import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">AI<span>CRIX</span></div>
          <p>AI-powered cricket match prediction and analysis. Built on data. Designed for fans who want the edge.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <Link href="/predictions">Predictions</Link>
          <Link href="/player-analysis">Player Analysis</Link>
          <Link href="/venue-reports">Venue Reports</Link>
          <Link href="/how-it-works">How it Works</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about-us">About AICRIX</Link>
          <Link href="/accuracy-reports">Accuracy Reports</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms of Use</Link>
          <Link href="/contact-us">Support</Link>
        </div>
      </div>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div className="footer-bottom">
          <span>© 2025 AICRIX. All rights reserved.</span>
          <span>Built with AI · Powered by Data · Made for Cricket</span>
        </div>
      </div>
    </footer>
  );
};
