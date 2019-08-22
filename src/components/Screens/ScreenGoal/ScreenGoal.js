import React from "react";
import NextButton from "../../UI/NextButton";
import BackButton from "../../UI/BackButton";

import up from "../../../assets/weight-up.png";
import down from "../../../assets/weight-down.png";
import equal from "../../../assets/weight-equal.png";

class ScreenGoal extends React.Component {
  state = {
    activeBox: -700
  };

  get show() {
    return this.props.activeSection === 5;
  }

  selectBox(index) {
    this.setState({
      activeBox: index
    });

    let type = "goal";
    this.props.setValue(index, type);
  }

  render() {
    const buttonEnabled = this.state.activeBox > -600;

    if (this.show) {
      return (
        <div className="ui header">
          <h2>Select your goal</h2>
          <div className="ui horizontal segments" style={{ cursor: "pointer" }}>
            <div
              className={
                this.state.activeBox === -500
                  ? "ui segment olive inverted"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(-500)}
            >
              <div className="ui small image">
                <img src={down} alt="weight-down" />
              </div>
              <h3>Lose Weight</h3>
            </div>
            <div
              className={
                this.state.activeBox === 0
                  ? "ui segment olive inverted"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(0)}
            >
              <div className="ui small image">
                <img src={equal} alt="weight-equal" />
              </div>
              <h3>Maintain Weight</h3>
            </div>
            <div
              className={
                this.state.activeBox === 500
                  ? "ui segment olive inverted"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(500)}
            >
              <div className="ui small image">
                <img src={up} alt="weight-up" />
              </div>
              <h3>Gain Weight</h3>
            </div>
          </div>
          <BackButton backClick={this.props.buttonClick} />
          <NextButton
            disabled={!buttonEnabled}
            nextClick={this.props.buttonClick}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ScreenGoal;
