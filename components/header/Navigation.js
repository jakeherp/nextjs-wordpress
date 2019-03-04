import Link from "next/link";

const navigation = () => (
  <nav id="main-menu">
    <ul
      style={{
        margin: 0,
        listStyle: "none"
      }}
    >
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/work/">
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href="/contact/">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/business-of-marketing/">
          <a>Business of Marketing</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default navigation;
