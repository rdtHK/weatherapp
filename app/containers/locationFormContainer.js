import React, {PropTypes} from "react";

import LocationForm from "../components/locationForm";

import {forecast} from "../helpers/apiHelpers";

export default class LocationFormContainer extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const place = event.target.elements['place'].value;
    this.context.router.push(`/forecast/${place}`);
  }

  render () {
    return (
      <LocationForm
        inline={this.props.inline}
        onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

LocationFormContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
