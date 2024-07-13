import React from "react";
import "../css/headline.css";

export default function Headline(props) {
  return <h2 className="headline">{props.title}</h2>;
}
