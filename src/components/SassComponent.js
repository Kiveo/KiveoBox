import React, { useState } from "react";
import PropTypes from "prop-types";

const SassComponent = props => {
  /* -- STATE -- */
  const [state, setState] = useState();
  /* -- LIFECYCLE -- */
  /* -- HANDLERS -- */
  /* -- RENDER -- */
  return (
    <div>
      <h1>Sass Component Heading</h1>
      <p>Paragraph</p>
      <p>
        {"A second Paragraph"}
        <span>Span inside p2</span>
      </p>
    </div>
  );
};

SassComponent.propTypes = {
  // add propTypes here
};

export default SassComponent;
