import Navigation from "./Navigation";

class MobileMenu extends React.Component {
  render() {
    return (
      <div className="mobile-menu">
        <div
          style={{
            fontSize: `4rem`,
            position: `absolute`,
            top: `2.5rem`,
            right: `2rem`,
            color: `#fff`,
            cursor: `pointer`
          }}
          onClick={this.props.action}
        >
          &times;
        </div>
        <Navigation />
      </div>
    );
  }
}

export default MobileMenu;
