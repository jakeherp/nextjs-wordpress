import Link from "next/link";

const FooterNavigation = () => (
  <nav>
    <ul className="footer-menu">
      <li>
        <Link href="/about/">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <a href="https://www.raconteur.net/work-for-us/">Careers</a>
      </li>
      <li>
        <a href="https://www.raconteur.net/">Raconteur.net</a>
      </li>
      <li>
        <a href="https://www.raconteur.net/privacy-policy/">Privacy Policy</a>
      </li>
      <li>
        <a href="https://www.raconteur.net/cookie-policy/">Cookie Policy</a>
      </li>
    </ul>
  </nav>
);

export default FooterNavigation;
