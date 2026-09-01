import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="footer-shell">
      <Wrapper className="py-10">
        <div className="footer-grid">
          <div className="space-y-4">
            <div className="brand-mark brand-mark-xl">MN</div>
            <p className="footer-copy">
              Daily intelligence for curious minds, curated with clarity and speed.
            </p>
          </div>

          <div>
            <p className="footer-title">Explore</p>
            <ul>
              <li>World</li>
              <li>Business</li>
              <li>Technology</li>
              <li>Culture</li>
            </ul>
          </div>

          <div>
            <p className="footer-title">Company</p>
            <ul>
              <li>About</li>
              <li>Advertise</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="footer-title">Legal</p>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Morning News</span>
          <span>Built for better reading</span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
