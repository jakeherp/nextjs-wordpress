import Logo from "./Logo";
import Navigation from "./Navigation";
import ToggleButton from "./ToggleButton";
import BomLogo from "./BomLogo";
import MobileMenu from "./MobileMenu";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      showMenu: false
    };
  }

  handleMenuClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <>
        <header>
          {this.state.showMenu && <MobileMenu action={this.handleMenuClick} />}
          <div className="header-content">
            <Logo />
            <Navigation />
            <div onClick={this.handleMenuClick} id="mobile-toggle">
              <ToggleButton />
            </div>
          </div>
        </header>
        <div id="bom-header">
          <BomLogo />
        </div>
      </>
    );
  }
}

export default Header;
