import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../sass/layout.scss";

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
