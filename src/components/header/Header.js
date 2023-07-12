import React from "react";
import Image from "../Image";
import cat from "../../img/cat.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>Header</h2>
        <Image css="header__img" image={cat} alt={`cat`} />
      </div>
    );
  }
}
export default Header;
