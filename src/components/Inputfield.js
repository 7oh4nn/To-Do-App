import React from 'react';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Inputfield extends React.Component {

  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: ""
    });
  }

  render() {
    return(
      <section>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="text"><h2>Add To Do</h2></label>
          <input type="text"
            value={this.state.text}
            onChange={this.handleChange}
            name="text"
            placeholder="what do you want to do?">
          </input>
          <button className="submit" type="submit" value="submit" name="submit"><FontAwesomeIcon icon="check" size="2x" /></button>
        </form>
      </section>
    )
  }
}
export default Inputfield;
