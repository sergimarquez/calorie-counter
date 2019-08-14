import React from "react";
import NextButton from "../../NextButton";
import BackButton from "../../BackButton";
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
          <h2>Slect your goal</h2>
          <div className="ui horizontal segments">
            <div
              className={
                this.state.activeBox === -500
                  ? "ui segment olive inverted"
                  : "ui  segment "
              }
              onClick={() => this.selectBox(-500)}
            >
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
              <h3>Gain Weight</h3>
            </div>
          </div>
          <BackButton backClick={this.props.backClick} />
          <NextButton
            disabled={!buttonEnabled}
            nextClick={this.props.nextClick}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ScreenGoal;
