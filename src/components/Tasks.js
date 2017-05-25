import React from 'react';
import Styles from '../Styles/stylesheet.js';
import PropTypes from 'prop-types';

const Tasks = (props) => {
    return (
      <div style={Styles.outerTask}>
        <div style={Styles.displayDate}>{props.date}:</div> 
        <div style={Styles.task}>{props.toDo}</div>
      </div>
    );
};

Tasks.propTypes = {
  date: React.PropTypes.string.isRequired,
  toDo: React.PropTypes.string.isRequired,
};

export default Tasks;
