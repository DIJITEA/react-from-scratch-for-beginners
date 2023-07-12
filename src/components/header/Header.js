import React from "react";
import Image from "../repeatingСomponents/Image";
import cat from "../../img/cat.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2>{this.props.title}</h2>
        <Image css="header__img" image={cat} alt={`cat`} />
      </header>
    );
  }
}
export default Header;
