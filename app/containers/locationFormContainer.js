import React from "react";

import LocationForm from "../components/locationForm";

export default class LocationFormContainer extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    const place = event.target.elements['place'].value;

    console.log(place);
  }

  render () {
    return (
      <LocationForm
        inline={this.props.inline}
        onSubmit={this.handleSubmit} />
    );
  }
}
