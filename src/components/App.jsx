import "../styles/sass.scss";
import React, { Component } from "react";
import { Key } from "./Button";
import { Spinner } from "./Spinner";
import { Card } from "./Card";

class App extends Component {
  state = {
    heartCondition: {},
    isLoading: true,
    isDisable: true,
  };

  render() {
    return this.state.isDisable ? (
      <Key handleButton={this.handleButton} />
    ) : (
      <div>
        <Spinner />
        <div className="cards__wrapper">{this.getCards(this.handleHeart)}</div>
      </div>
    );
  }

  handleButton = () => {
    this.setState({ isDisable: false });
  };

  handleHeart = (label, condition) => {
    const heartCondition = condition;
    heartCondition[label] = !heartCondition[label];
    this.setState({ heartCondition });
  };

  getCards = () => {
    const { apartmentsDescriptions } = this.props,
      spinner = document.querySelector(".card__button");
    if (spinner !== null) spinner.style.display = "none";
    return apartmentsDescriptions.map((description, i) => {
      let data = [description, i, this.state.heartCondition, this.handleHeart];
      return <Card key={i} cardData={data} />;
    });
  };
}

export default App;
