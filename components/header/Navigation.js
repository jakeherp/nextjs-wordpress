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
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about/">About</Link>
      </li>
      <li>
        <Link href="/work/">Work</Link>
      </li>
      <li>
        <Link href="/contact/">Contact</Link>
      </li>
      <li>
        <Link href="/business-of-marketing/">Business of Marketing</Link>
      </li>
    </ul>
  </nav>
);

export default navigation;
