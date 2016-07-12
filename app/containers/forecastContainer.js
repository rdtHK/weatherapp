import React from "react";
import Forecast from "../components/forecast";
import {fetchForecast} from "../helpers/apiHelpers";

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      forecastData: [],
    }
  }
  get city() {
    return this.props.params.city;
  }
  componentDidMount() {
    fetchForecast(this.city, 5)
      .then((data) => {
        this.setState({
          isLoading: false,
          forecastData: data,
        });
      });
  }
  render() {
    return (
      <Forecast
        city={this.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    );
  }
}
