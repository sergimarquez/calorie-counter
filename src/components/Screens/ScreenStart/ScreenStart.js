import React from "react";
import NextButton from "../../UI/NextButton";
import dinner from "../../../assets/dinner.svg";
import "./ScreenStart.css";

class ScreenStart extends React.Component {
  get show() {
    return this.props.activeSection === 1;
  }

  render() {
    if (this.show) {
      return (
        <div>
          <h2 className="ui header">Calculate your daily calories intake</h2>
          <div className="ui image medium start-image transition">
            <img src={dinner} alt="people having dinner" />
          </div>
          <p> Discover how many calories you should eat every day. </p>
          <p>
            We calculate your daily calories based on your your stats, life
            style and goals.
          </p>
          <NextButton nextClick={this.props.buttonClick} text={`START`} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ScreenStart;
