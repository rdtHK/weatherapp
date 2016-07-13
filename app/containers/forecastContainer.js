import React, {PropTypes} from "react";
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
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.params.city != this.city) {
      this.fetchData();
    }
  }
  fetchData() {
    fetchForecast(this.city, 5)
      .then((data) => {
        this.setState({
          isLoading: false,
          forecastData: data,
        });
      });
  }
  handleClick(day) {
    this.context.router.push({
      pathname: '/detail/' + this.city,
      state: {
        day: day
      }
    });
  }
  render() {
    return (
      <Forecast
        onClick={this.handleClick.bind(this)}
        city={this.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    );
  }
}

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
