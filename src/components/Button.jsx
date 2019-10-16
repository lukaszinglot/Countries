import React, { Component } from "react";
import { getCountriesList } from "../store/actions";
import { connect } from "react-redux";
import "./button.css";

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexNumber: 0,
      userGuess: "",
      checkInput: "",
      score: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getCountriesList();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      userGuess: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.userGuess);
    const min = 0;
    const max = 249;
    if (
      this.props.countries[this.state.indexNumber].name === this.state.userGuess
    ) {
      this.setState({
        indexNumber: this.getRandomInt(min, max),
        userGuess: "",
        checkInput: ""
      });
    }
  };

  renderCountries() {
    const data = Array.from(this.props.countries);
    if (this.props.countries.length) {
      return (
        <div>
          <img
            src={data[this.state.indexNumber].flag}
            alt={data[this.state.indexNumber].name}
            className="image"
          />
          <p>{data[this.state.indexNumber].name}</p>
          <form className="user-input" onSubmit={this.handleSubmit}>
            <label>
              Zgadnij jaki to kraj!:
              <input
                type="text"
                value={this.state.userGuess}
                onChange={this.handleClick}
              />
              {/* <button type="submit">Submit</button> */}
            </label>
          </form>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderCountries()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.data
  };
};

export default connect(
  mapStateToProps,
  { getCountriesList }
)(Button);
