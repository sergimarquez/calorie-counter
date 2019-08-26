import React from "react";
import BackButton from "../../UI/BackButton";
import burger from "../../../assets/burger.svg";

class ScreenResults extends React.Component {
  state = {
    result: ""
  };

  get show() {
    return this.props.activeSection === 6;
  }

  render() {
    const result =
      this.props.gender === "male"
        ? Math.round(
            (10 * this.props.weight +
              6.25 * this.props.height -
              5 * this.props.age +
              5) *
              this.props.activityLevel +
              this.props.goal
          )
        : Math.round(
            (10 * this.props.weight +
              6.25 * this.props.height -
              5 * this.props.age -
              161) *
              this.props.activityLevel +
              this.props.goal
          );

    const imgStyle = {
      width: "10.5em"
    };

    if (this.show) {
      return (
        <div className="ui header">
          <h3>We recommend you to eat:</h3>
          <h1>
            {result}
            kcal per day
          </h1>
          <div className="ui image medium" style={imgStyle}>
            <img src={burger} alt="guy looking at a hamburger" />
          </div>
          <div
            style={{ fontSize: "0.5em", fontWeight: "500", marginTop: "40px" }}
          >
            <h4>How is your result calculated?</h4>
            <p>
              We calculate your BMR Your BMR (Basal Metabolic Rate), which is
              the amount of energy in calories your body requires to function at
              complete rest. This calculation is based on your gender, age,
              height and weight. There are multiple formulas used to calculate
              BMR. Nowadays, the Mifflin-St Jeor equation is believed to give
              the most accurate result and, is therefore what we used in this
              calculator.
            </p>
            <p>
              Then we calculate you TDEE (Total Daily Energy Expenditure) which
              is the estimated amount of energy in calories your body consumes
              in a day while taking into account your activity level. More
              active individuals will burn more calories per day than more
              sedentary people. We use the Harris–Benedict equation to calculate
              this number, and modify the final calories depending on your goal
              (add or rest 500kcal).
            </p>
            <p>
              <i>
                Note: It's recommended to include healthy foods in your diet.
                It's also important to keep good balance of macros, for example,
                50% Carbohydrates, 30% Fat, 20% Protein.
              </i>
            </p>
          </div>

          <BackButton backClick={this.props.buttonClick} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ScreenResults;
