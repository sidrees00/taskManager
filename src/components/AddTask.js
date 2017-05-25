import React from 'react';
import Calendar from 'react-input-calendar';
import Styles from '../Styles/stylesheet.js';
import PropTypes from 'prop-types';

const AddTask = (props) => {
    return (
      <div style={Styles.innerTask}>
        <h1 style={Styles.heading}>Add Event</h1>
        <form>
          {'Enter Event: '} 
          <input 
            type='text' 
            onChange={props.onChange}
            value={props.value}
            style={Styles.input}
          />
        </form>

        <div style={Styles.date}>
          {'Select Date: '}
          <Calendar 
            format='MM/DD/YYYY' 
            date={props.date}
            onChange={props.dateChange}
          />
        </div>
          
        <input 
          type='button' 
          value='Create Event'
          style={Styles.button} 
          onClick={props.submitEvent} 
        />
        <input 
          type='button' 
          value='Reset'
          style={Styles.button}
          onClick={props.reset}
        />
      </div>
    );
};

AddTask.propTypes = {
  'onChange': React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  submitEvent: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  date: React.PropTypes.string.isRequired,
  dateChange: React.PropTypes.func.isRequired,
};

export default AddTask; 

