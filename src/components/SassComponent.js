import React, { useState } from "react";
import "./SassComponent.scss";
// import PropTypes from "prop-types";

const SassComponent = props => {
  /* -- STATE -- */
  const [state, setState] = useState();
  /* -- LIFECYCLE -- */
  /* -- HANDLERS -- */
  /* -- RENDER -- */
  return (
    <div className="SassComponent">
      <h1 className="SassComponent-header">Sass Component Heading</h1>
      <span className="SassComponent-span">Span Outside P</span>
      <p className="SassComponent-paragraph">
        {"Paragraph 1: "}
        <span className="SassComponent-span">Span P1</span>
      </p>
      <p className="SassComponent-paragraph">
        {"A second Paragraph"}
        <span className="SassComponent-span">Span inside p2</span>
      </p>
      <nav className="SassComponent-nav">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
        <p className="special">Special paragraph</p>
        <div className="element">Hover Div Element</div>
        <div className="samples">Sample: 1</div>
        <div className="samples">Sample: 2</div>
        <div className="samples">Sample: 3</div>
        <hr />
        <button type="button">&#9745;</button>
        <button type="button">&#10003;</button>
        <button type="button">&#10004;</button>
        <hr />
        <button type="button">&#10008;</button>
        <button type="button">&#10007;</button>
        <button type="button">&#10006;</button>
        <button type="button">&#10005;</button>
      </nav>
    </div>
  );
};

SassComponent.propTypes = {
  // add propTypes here
};

export default SassComponent;
