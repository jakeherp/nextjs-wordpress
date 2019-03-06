import Logo from "./Logo";
import Navigation from "./Navigation";
import ToggleButton from "./ToggleButton";
import BomHeader from "./BomHeader";
import MobileMenu from "./MobileMenu";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      showMenu: false,
      location: ""
    };
  }

  componentDidMount() {
    this.setState({ location: window.location.href });
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
        {this.state.location.indexOf("business-of-marketing") > -1 ? (
          <BomHeader />
        ) : null}
      </>
    );
  }
}

export default Header;
