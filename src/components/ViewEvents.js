import React from 'react';
import Styles from '../Styles/stylesheet.js';
import PropTypes from 'prop-types';

const ViewEvents = (props) => {
  return (
    <div style={Styles.innerTask}>
      <h1 style={Styles.heading}> Your Events </h1>
        <form>
          {'Select Month: '}
          <select
            style={Styles.select}
            value={props.value}  
            onChange={props.onChange}>
              {props.months}
          </select>
        </form>
        
        <div 
          style={Styles.month}> 
            {props.year[props.selected].month}
        </div>

        <div style={Styles.top}>
          {props.listings}          
        </div>
    </div>
  );
};

ViewEvents.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  months: React.PropTypes.array.isRequired,
  year: React.PropTypes.object.isRequired,
  selected: React.PropTypes.string.isRequired,
  listings: React.PropTypes.array.isRequired,
};

export default ViewEvents;