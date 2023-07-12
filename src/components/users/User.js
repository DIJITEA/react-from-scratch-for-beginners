import React from "react";
import {BiSolidCat} from 'react-icons/bi'
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddUser from "./AddUser";
class User extends React.Component {
    constructor(props){
        super(props)
        this.state={
            editForm: false
        }
    }
  user = this.props.user;
  
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
        <IoHammerSharp onClick={() => {
            this.setState({editForm: !this.state.editForm})
        }} className="edit-icon"/>
        <h3>
          {this.user.first_name} {this.user.last_name}
          <BiSolidCat/>
        </h3>
        <img src={this.user.avatar} alt="user avatar"/>
        <p>{this.user.email}</p>
        <b>{this.user.isHappy ? "Happy c:" : "Not happy :c"}</b>

        {this.state.editForm && <AddUser onAdd={this.props.onEdit}  user={this.user}/>}
      </div>
    );
  }
}
export default User;
