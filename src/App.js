import React from 'react';
import "./App.css";
import moment from 'moment';

import AddTask from './components/AddTask.js';
import ViewEvents from './components/ViewEvents.js';
import Tasks from './components/Tasks.js';
import Styles from './Styles/stylesheet.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: moment().format('MM/DD/YYYY'),
      input: '',
      selected: '05',
      year: {
        '01' : {month: 'January', events: {}},
        '02' : {month: 'February', events: {}},
        '03' : {month: 'March', events: {}},
        '04' : {month: 'April', events: {}},
        '05' : {month: 'May', events: {}},
        '06' : {month: 'June', events: {}},
        '07' : {month: 'July', events: {}},
        '08' : {month: 'August', events: {}},
        '09' : {month: 'September', events: {}},
        '10' : {month: 'October', events: {}},
        '11' : {month: 'November', events: {}},
        '12' : {month: 'December', events: {}},
      },
    }
    this.submitEvent = this.submitEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.reset = this.reset.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  submitEvent(e){
    e.preventDefault();
    if(!this.state.input){
      alert("Please Enter Event")
    } else {
        let currDate = this.state.date,
            currEvents = this.state.year,
            month = currDate.slice(0,2),
            date = currDate.slice(3,5),
            year = currDate.slice(6,10);

        if (currEvents[month].events[date]) {
          currEvents[month].events[date].push(this.state.input)
        } else {
          currEvents[month].events[date] = [this.state.input]
        };
       
        this.setState({
          events: currEvents, 
          input: '',
          date: moment().format('MM/DD/YYYY'),
      });
    };
  };

  handleChange(e){
    let newEvent = e.target.value;
    this.setState({input: newEvent});
  };

  dateChange(e){
    let date = e;
    this.setState({date: date});
  };

  reset(){
    this.setState({input: '', date: moment().format('MM/DD/YYYY')});
  };
  
  onSelect(e){
    this.setState({selected: e.target.value})
  };

  render(){
    let months = [];
    for(let i in this.state.year){
      months.push(
        <option value={i} key={i}>{this.state.year[i].month}</option>
      )
    };

    let thisYear = this.state.year,
        thisMonth= this.state.selected,
        listings = [];
    
    for(let date in thisYear[thisMonth].events){
      let list = thisYear[thisMonth].events[date].join(' ')
        listings.push(<Tasks date={date} toDo={list} />)
    }
    
    return (
      <div style={Styles.container}>
        <div style={Styles.events}>
          <AddTask
            onChange={this.handleChange}
            value={this.state.input}
            submitEvent={this.submitEvent}
            reset={this.reset}
            date={this.state.date}
            dateChange={this.dateChange}
          />
        </div>

        <div style={Styles.vertical}></div>

        <div>
          <ViewEvents
            value={this.state.selected}
            onChange={this.onSelect}
            months={months}
            year={this.state.year}
            selected={this.state.selected}
            listings={listings}
          />
        </div>
      </div>
    )
  }
};

export default App;


