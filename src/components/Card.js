import React from "react";
import ScreenStart from "./Screens/ScreenStart/ScreenStart";
import ScreenGender from "./Screens/ScreenGender/ScreenGender";
import ScreenStats from "./Screens/ScreenStats/ScreenStats";
import ScreenActivity from "./Screens/ScreenActivity/ScreenActivity";
import ScreenGoal from "./Screens/ScreenGoal/ScreenGoal";
import ScreenResults from "./Screens/ScreenResults/ScreenResults";

import "./Card.css";

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

  goNext = () => {
    this.setState({ activeSection: this.state.activeSection + 1 });
  };
  goBack = () => {
    this.setState({ activeSection: this.state.activeSection - 1 });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    this.setState({
      [name]: type === "number" ? parseInt(value) : value
    });
  };

  setValue = (value, type) => {
    this.setState({ [type]: value });
  };

  handleWeight = value => {
    this.setState({ weight: value });
  };

  handleHeight = value => {
    this.setState({ height: value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui text container" id="card-container">
        <div className="ui large segment very padded center aligned">
          <ScreenStart
            activeSection={this.state.activeSection}
            nextClick={this.goNext}
            backClick={this.goBack}
          />
          <ScreenGender
            activeSection={this.state.activeSection}
            nextClick={this.goNext}
            backClick={this.goBack}
            handleChange={this.handleChange}
            setValue={this.setValue}
            age={this.state.age}
            gender={this.state.gender}
          />
          <ScreenStats
            activeSection={this.state.activeSection}
            nextClick={this.goNext}
            backClick={this.goBack}
            handleWeight={this.handleWeight}
            handleHeight={this.handleHeight}
            weight={this.state.weight}
            height={this.state.height}
            handleChange={this.handleChange}
          />
          <ScreenActivity
            activeSection={this.state.activeSection}
            nextClick={this.goNext}
            backClick={this.goBack}
            setValue={this.setValue}
          />
          <ScreenGoal
            activeSection={this.state.activeSection}
            nextClick={this.goNext}
            backClick={this.goBack}
            setValue={this.setValue}
          />
          <ScreenResults
            activeSection={this.state.activeSection}
            backClick={this.goBack}
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
