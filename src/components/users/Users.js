import React from "react";
import User from "./User";

class Users extends React.Component {

  render() {
    if (this.props.users.length > 0)
      return (
        <div className="users__list">
          {this.props.users.map((el) => (
            <User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={el.id} user={el}/>
          ))}
        </div>
      );
    else return <div className="user">no user</div>;
  }
}
export default Users;
