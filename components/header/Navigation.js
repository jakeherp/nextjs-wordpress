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
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/work">
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/business-of-marketing">
          <a>Business of Marketing</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default navigation;
