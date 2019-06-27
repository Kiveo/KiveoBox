/**
 * TaskListArranger.js
 *
 * This display arranger component is wrapped by the TaskListContainer component.
 */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { SectionHeading } from 'components/core/general';
import TaskListContainer from './TaskListContainer';
import InlineEditHook from '../../../components/redux-form-field/input/InlineEditHook';


/**
 * Renders the display components.
 * This functional component receives all its props from the container wrapper.
 *
 * @param {*} props Props passed down from the wrapper
 */
// const TaskListArranger = (props) => {
// const { data } = props;
const TaskListArranger = () => {
  const [parentState, setParentState] = useState('Parent State');
  
  return (
    <div>
      <SectionHeading>
        <h5>Task List</h5>
      </SectionHeading>
      <div className="p-2">{/* TODO: Components go here */}
      {/* // TODO remove after testing (<hr />content</hr />) */}
      <hr />
      {console.log('current parentState: ', parentState)}
      <p>Hello</p>
      <InlineEditHook 
        initialValue={parentState} 
        handleChange={setParentState}
        handleConfirm={setParentState}
        handleRevert={setParentState}
      />
      <hr />
      </div>
    </div>
  );
};

// TaskListArranger.propTypes = {
//   data: PropTypes.object
// };

export default TaskListContainer(TaskListArranger);
