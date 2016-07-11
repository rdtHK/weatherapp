import React from "react";

import LocationForm from "../components/locationForm";

import {forecast} from "../helpers/apiHelpers";

export default class LocationFormContainer extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    const place = event.target.elements['place'].value;

    forecast(place, 5)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render () {
    return (
      <LocationForm
        inline={this.props.inline}
        onSubmit={this.handleSubmit} />
    );
  }
}
