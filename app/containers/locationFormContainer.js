import React from "react";

import LocationForm from "../components/locationForm";

import {forecast} from "../helpers/apiHelpers";

export default class LocationFormContainer extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    const place = event.target.elements['place'].value;

    console.log(forecast(place, 5));
  }

  render () {
    return (
      <LocationForm
        inline={this.props.inline}
        onSubmit={this.handleSubmit} />
    );
  }
}
