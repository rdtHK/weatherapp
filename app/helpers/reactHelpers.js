import React from "react";

export const Dump = (props) => {
  return <pre>{JSON.stringify(props.object, null, 2)}</pre>;
};
