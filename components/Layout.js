import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../sass/layout.scss";

import NProgress from "next-nprogress/component";

const Layout = props => {
  return (
    <>
      <NProgress color="#EF3D4B" showAfterMs={10} />

      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
