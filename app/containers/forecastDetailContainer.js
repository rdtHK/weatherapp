import React from "react";
import ForecastDetail from "../components/forecastDetail";

export default class ForecastDetailContainer extends React.Component {
  render() {
    const city = this.props.params.city;
    const day = this.props.location.state.day;
    return (
      <ForecastDetail city={city} day={day}/>
    );
  }
}
