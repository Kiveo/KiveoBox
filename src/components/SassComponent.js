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
      <h1 className="SassComponent__header">Sass Component Heading</h1>
      <span className="SassComponent-__pan">Span Outside P</span>
      <p className="SassComponent__paragraph">
        {"Paragraph 1: "}
        <span className="SassComponent__span">Span P1</span>
      </p>
      <p className="SassComponent__paragraph">
        {"A second Paragraph"}
        <span className="SassComponent__span">Span inside p2</span>
      </p>
      <nav className="SassComponent__nav">
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
        <button className="SassComponent__button--active">
          <span>&#10003;</span>
        </button>
        <button className="SassComponent__button">&#10004;</button>
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
