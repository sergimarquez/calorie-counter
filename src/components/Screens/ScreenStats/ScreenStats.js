import React from "react";
import NextButton from "../../NextButton";
import BackButton from "../../BackButton";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./ScreenStats.css";

class ScreenStats extends React.Component {
  get show() {
    return this.props.activeSection === 3;
  }

  render() {
    if (this.show) {
      return (
        <div>
          <h2>Select your height and weight</h2>
          <form className="ui big form">
            <div className="ui form">
              <InputRange
                formatLabel={value => `${value}kg`}
                maxValue={180}
                minValue={35}
                value={this.props.weight}
                onChange={this.props.handleWeight}
              />
              <InputRange
                formatLabel={value => `${value}cm`}
                maxValue={230}
                minValue={120}
                value={this.props.height}
                onChange={this.props.handleHeight}
              />
            </div>
          </form>
          <BackButton backClick={this.props.buttonClick} />
          <NextButton nextClick={this.props.buttonClick} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ScreenStats;
