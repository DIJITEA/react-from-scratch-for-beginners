import React from "react";

class Users extends React.Component {
  users = [
    {
      id: 1,
      firstname: "Simon",
      lastname: "Cat",
      bio: `love to eat`,
      age: 6,
      isHappy: true,
    },
    {
      id: 2,
      firstname: "not Simon",
      lastname: "not Cat",
      bio: `love to eat`,
      age: 7,
      isHappy: false,
    },
  ];
  render() {
    if (this.users.length > 0)
      return (
        <div>
          {this.users.map((el) => (
            <div className="user" key={el.id}>
              <h3>
                {el.firstname} {el.lastname}
              </h3>
              <p>{el.bio}</p>
              <b>{el.isHappy ? 'Happy c:' : 'Not happy :c'}</b>
            </div>
          ))}
        </div>
      )
      else return(
        <div className="user">no user</div>
      )
  }
}
export default Users;
