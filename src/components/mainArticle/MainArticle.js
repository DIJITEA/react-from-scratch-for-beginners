import React from "react";
import Users from "../users/Users";
import AddUser from "../users/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

class MainArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  componentDidMount() {
    axios.get(baseUrl).then((res) => {
      this.setState({ users: res.data.data });
    });
  }

  render() {
    return (
      <article>
        <Users
          users={this.state.users}
          onDelete={this.deleteUser}
          onEdit={this.editUser}
        />
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </article>
    );
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }
  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
  }
}
export default MainArticle;
