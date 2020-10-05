import "./styles/sass.scss";
import React, { Component } from "react";
import { render } from "react-dom";
import fakeServerData from "./services/entities.json";
import Like from "./components/like";
import Button from "@material-ui/core/Button";
import ReactLoading from "react-loading";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentsDescriptions: [],
      heartCondition: {},
      isLoading: false,
      isDisable: true,
    };
  }

  componentDidMount() {
    // get Data from fake server:)
    const serverResponse = fakeServerData.apartmentsDescriptions,
      getDescriptions = async () => {
        let apartmentsDescriptions = await serverResponse;
        return apartmentsDescriptions;
      };

    this.setState({
      apartmentsDescriptions: getDescriptions(),
    });
    this.setState({
      heartCondition: this.state.apartmentsDescriptions,
    });
  }

  render() {
    const handleHeart = (label, condition) => {
        const heartCondition = condition;
        condition[label] = !condition[label];
        this.setState({ heartCondition });
      },
      styles = [
        {
          display: "flex",
          backgroundColor: "tomato",
          justifyContent: "space-around",
        },
        {
          marginTop: "100px",
          cursor: "pointer",
        },
      ],
      renderApartments = (data, idx, condition) => {
        const card = (
          <div key={idx} className="card-wrapper">
            <img
              className="card-image"
              src="./images/home.jpg"
              alt="Здесь будет картинка"
            />
            <div style={styles[0]}>
              <ul className="card-list">
                <li className="card-item">{data.name}</li>
                <li className="card-item">метро: {data.subway}</li>
                <li className="card-item">город: {data.city}</li>
                <li className="card-item">улица: {data.street}</li>
                <li className="card-item">кол-во комнат: {data.rooms}</li>
                <li className="card-item">цена: {data.price}</li>
              </ul>

              <Like
                style={styles[1]}
                handleHeart={handleHeart}
                name={data.name}
                condition={condition}
              />
            </div>
          </div>
        );
        return card;
      },
      handleButton = () => {
        this.setState({ isDisable: false, isLoading: true });
        setTimeout(() => this.setState({ isLoading: false }), 2000);
      },
      { apartmentsDescriptions } = this.state;

    if (this.state.isDisable) {
      return (
        <Button onClick={handleButton} variant="contained" color="primary">
          Show apartments
        </Button>
      );
    } else if (this.state.isLoading) {
      return (
        <div className="card-button">
          <ReactLoading type={"bars"} color="#fff" />
        </div>
      );
    } else if (this.state.isLoading === false) {
      return (
        <div className="cards-wrapper">
          {apartmentsDescriptions.map((description, i) => {
            return renderApartments(description, i, this.state.heartCondition);
          })}
        </div>
      );
    }
  }
}

render(<Cards />, document.getElementById("app"));
