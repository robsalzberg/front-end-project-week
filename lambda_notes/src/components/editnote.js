import React, { Component } from "react";
import axios from "axios";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      title: "",
      body: "",
      noteEdited: false
    };
  }

  componentDidMount() {
    console.log(this.props.notes);
    this.props.notes.map(note => {
      if (this.props.match.params.id === note._id) {
        this.setState({ title: note.title, body: note.textBody });
      }
    });
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const note = {
      title: this.state.title,
      textBody: this.state.body
    };

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "", noteEdited: true });
      })
      .catch(() => alert("Error editing note"));
  };

  render() {
    return (
      <div className="pageWrapper">
        <h1>Edit Note:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <input
            required
            placeholder="Note Text"
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditNote;