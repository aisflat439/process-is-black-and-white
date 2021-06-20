import React from "react";

const ogImage = ({ pageContext }) => (
  <>
    <div>{pageContext.title}</div>
    <div>{pageContext.date}</div>
    <div>{pageContext.duration}</div>
  </>
);

export default ogImage