import React, { Component } from "react";
import { getCountriesList, guessedByUser } from "../store/actions";
import { connect } from "react-redux";
import "./button.scss";

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexNumber: 0,
      userGuess: "",
      checkInput: "",
      gameStart: true
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
    const min = 0;
    const max = 249;
    if (
      this.props.countries[this.state.indexNumber].name === this.state.userGuess
    ) {
      this.props.guessedByUser(this.state.userGuess);
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
          <div className="score-board">
            <div className="user-flex">User Panel</div>
            <div>{data[this.state.indexNumber].name}</div>
            <div>Guessed By User: </div>
            {this.props.guessed.map(guess => (
              <div key={guess}>{guess}</div>
            ))}
          </div>
          <img
            src={data[this.state.indexNumber].flag}
            alt={data[this.state.indexNumber].name}
            className="image"
          />
          <form className="user-input" onSubmit={this.handleSubmit}>
            <label>
              Zgadnij jaki to kraj!:
              <input
                type="text"
                value={this.state.userGuess}
                onChange={this.handleClick}
              />
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
    countries: state.countries.data,
    guessed: state.countries.guessed
  };
};

export default connect(
  mapStateToProps,
  { getCountriesList, guessedByUser }
)(Button);
