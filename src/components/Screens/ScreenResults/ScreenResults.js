import React from "react";
import BackButton from "../../UI/BackButton";

class ScreenResults extends React.Component {
  state = {
    result: ""
  };

  get show() {
    return this.props.activeSection === 6;
  }

  render() {
    if (this.show) {
      if (this.props.gender === "male") {
        return (
          <div className="ui header">
            <h3>You should be eating</h3>
            <h2>
              {Math.floor(
                (10 * this.props.weight +
                  6.25 * this.props.height -
                  5 * this.props.age +
                  5) *
                  this.props.activityLevel +
                  this.props.goal
              )}
              kcal per day
            </h2>
            <BackButton backClick={this.props.buttonClick} />
          </div>
        );
      } else if (this.props.gender === "female")
        return (
          <div className="ui header">
            <h3>You should be eating</h3>
            <h2>
              {Math.round(
                (10 * this.props.weight +
                  6.25 * this.props.height -
                  5 * this.props.age -
                  161) *
                  this.props.activityLevel +
                  this.props.goal
              )}{" "}
              kcal per day
            </h2>
            <BackButton backClick={this.props.buttonClick} />
          </div>
        );
    } else {
      return null;
    }
  }
}

export default ScreenResults;
