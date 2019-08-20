import React from "react";
import NextButton from "../../UI/NextButton";
import BackButton from "../../UI/BackButton";
import male from "../../../assets/male.png";
import female from "../../../assets/female.png";

class ScreenGender extends React.Component {
  get show() {
    return this.props.activeSection === 2;
  }

  state = {
    activeBox: 0
  };

  selectBox(gender) {
    this.setState({
      activeBox: gender
    });

    let type = "gender";
    this.props.setValue(gender, type);
  }

  render() {
    const buttonEnabled =
      this.props.age > 19 &&
      this.props.age < 78 &&
      this.props.gender.length > 1;

    if (this.show) {
      return (
        <div>
          <h2>Select your age and gender</h2>

          <div className="ui horizontal segments">
            <div
              className={
                this.state.activeBox === "male"
                  ? "ui segment compact olive inverted"
                  : "ui  segment compact"
              }
              onClick={() => this.selectBox("male")}
            >
              <div className="ui small image">
                <img src={male} alt="male" />
              </div>
              <h3>Male</h3>
            </div>
            <div
              className={
                this.state.activeBox === "female"
                  ? "ui segment olive inverted compact"
                  : "ui  segment compact"
              }
              onClick={() => this.selectBox("female")}
            >
              <div className="ui small image">
                <img src={female} alt="female" />
              </div>
              <h3>Female</h3>
            </div>
          </div>

          <form className="ui big form">
            <div className="ui form">
              <div className="ui center aligned grid inline fields ">
                <div className="four wide field">
                  <h3>Age:</h3>
                  <input
                    name="age"
                    value={this.props.age}
                    onChange={this.props.handleAge}
                    placeholder="age"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </form>
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

export default ScreenGender;
