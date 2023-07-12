import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }
  render() {
    return (
      <form>
        <input
          placeholder="firstname"
          onChange={(e) => this.setState({ firstname: e.target.value })}
        />
        <input
          placeholder="lastname"
          onChange={(e) => this.setState({ lastname: e.target.value })}
        />
        <textarea
          placeholder="bio"
          onChange={(e) => this.setState({ bio: e.target.value })}
        />
        <input
          placeholder="age"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Is happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() =>
            this.props.onAdd({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            })
          }
        >
          Add User
        </button>
      </form>
    );
  }
}
export default AddUser;
