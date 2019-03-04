import FooterNavigation from "./FooterNavigation";

const Footer = () => (
  <footer className="page-footer">
    <div>
      Raconteur Media Ltd. &copy; {new Date().getFullYear()} All rights
      reserved.
      <br />
      2nd Floor, Portsoken House, 155-157 Minories, London EC3N 1LJ
    </div>
    <FooterNavigation />
  </footer>
);

export default Footer;
