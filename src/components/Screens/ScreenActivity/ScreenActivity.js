import React from "react";
import NextButton from "../../UI/NextButton";
import BackButton from "../../UI/BackButton";
import "./ScreenActivity.css";

class ScreenActivity extends React.Component {
  state = {
    activeBox: 0
  };

  get show() {
    return this.props.activeSection === 4;
  }

  selectBox(index) {
    this.setState({
      activeBox: index
    });

    let type = "activityLevel";
    this.props.setValue(index, type);
  }

  render() {
    const buttonEnabled = this.state.activeBox > 0;

    if (this.show) {
      return (
        <div className="ui header">
          <h2>Select your activity level</h2>
          <div style={{ cursor: "pointer" }}>
            <div
              className={
                this.state.activeBox === 1.2
                  ? "ui segment olive inverted secondary"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(1.2)}
            >
              <div>
                <h4>Sedentary (little or no exercise)</h4>
              </div>
            </div>
            <div
              className={
                this.state.activeBox === 1.375
                  ? "ui segment olive inverted secondary"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(1.375)}
            >
              <h4>Lightly Active (light exercise 1-3 days per week)</h4>
            </div>
            <div
              className={
                this.state.activeBox === 1.55
                  ? "ui segment olive inverted secondary"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(1.55)}
            >
              <h4>Moderately Active (moderate exercise 3-5 days per week)</h4>
            </div>
            <div
              className={
                this.state.activeBox === 1.725
                  ? "ui segment olive inverted secondary"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(1.725)}
            >
              <h4>Very Active (hard exercise 5+ days per week))</h4>
            </div>
            <div
              className={
                this.state.activeBox === 1.9
                  ? "ui segment olive inverted secondary"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(1.9)}
            >
              <h4>Extremely Active (very hard exercise 6+ days per week)</h4>
            </div>
            <BackButton backClick={this.props.buttonClick} />
            <NextButton
              disabled={!buttonEnabled}
              nextClick={this.props.buttonClick}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ScreenActivity;
