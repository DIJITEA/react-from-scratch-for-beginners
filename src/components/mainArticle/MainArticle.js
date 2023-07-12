import React from "react";
import Users from "../users/Users";
import AddUser from "../users/AddUser";
class MainArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
    };
    this.addUser = this.addUser.bind(this)
  }
  render() {
    return (
      <article>
        <Users users={this.state.users} />
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </article>
    );
  }

  addUser(user){
    const id = this.state.users.length +1
    this.setState({users: [...this.state.users, {id, ...user}]})
  }

}
export default MainArticle;
