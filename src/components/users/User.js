import React from "react";
import {BiSolidCat} from 'react-icons/bi'
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
class User extends React.Component {
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon"/>
        <IoHammerSharp className="edit-icon"/>
        <h3>
          {this.user.firstname} {this.user.lastname}
          <BiSolidCat/>
        </h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? "Happy c:" : "Not happy :c"}</b>
      </div>
    );
  }
}
export default User;
