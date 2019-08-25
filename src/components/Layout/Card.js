import React from "react";
import ScreenStart from "../Screens/ScreenStart/ScreenStart";
import ScreenGender from "../Screens/ScreenGender/ScreenGender";
import ScreenStats from "../Screens/ScreenStats/ScreenStats";
import ScreenActivity from "../Screens/ScreenActivity/ScreenActivity";
import ScreenGoal from "../Screens/ScreenGoal/ScreenGoal";
import ScreenResults from "../Screens/ScreenResults/ScreenResults";

class Card extends React.Component {
  state = {
    activeSection: 1,
    gender: "",
    age: "",
    weight: 60,
    height: 160,
    activityLevel: 0,
    goal: 0
  };

  buttonClick = e => {
    const type = e.target.id;
    const sum = type === "next" ? +1 : -1;
    this.setState({ activeSection: this.state.activeSection + sum });
  };

  setValue = (value, type) => {
    this.setState({ [type]: value });
  };

  handleAge = e => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    this.setState({
      [name]: type === "number" ? parseInt(value) : value
    });
  };

  handleWeight = value => {
    this.setState({ weight: value });
  };

  handleHeight = value => {
    this.setState({ height: value });
  };

  render() {
    return (
      <div className="ui text container" style={{ marginTop: "30px" }}>
        <div className="ui large segment very padded center aligned">
          <ScreenStart
            activeSection={this.state.activeSection}
            buttonClick={this.buttonClick}
          />
          <ScreenGender
            activeSection={this.state.activeSection}
            buttonClick={this.buttonClick}
            handleAge={this.handleAge}
            setValue={this.setValue}
            age={this.state.age}
            gender={this.state.gender}
          />
          <ScreenStats
            activeSection={this.state.activeSection}
            buttonClick={this.buttonClick}
            handleWeight={this.handleWeight}
            handleHeight={this.handleHeight}
            weight={this.state.weight}
            height={this.state.height}
            handleChange={this.handleChange}
          />
          <ScreenActivity
            activeSection={this.state.activeSection}
            buttonClick={this.buttonClick}
            setValue={this.setValue}
          />
          <ScreenGoal
            activeSection={this.state.activeSection}
            buttonClick={this.buttonClick}
            setValue={this.setValue}
          />
          <ScreenResults
            activeSection={this.state.activeSection}
            buttonClick={this.buttonClick}
            gender={this.state.gender}
            age={this.state.age}
            weight={this.state.weight}
            height={this.state.height}
            activityLevel={this.state.activityLevel}
            goal={this.state.goal}
          />
        </div>
      </div>
    );
  }
}

export default Card;
