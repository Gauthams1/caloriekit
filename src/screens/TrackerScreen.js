import React, { Component } from 'react';
import _ from 'lodash';

import { NAV_STYLES } from '../config';

import TimeLine from '../components/TimeLine';
// import console = require('console');

class TrackerScreen extends Component {
  static navigationOptions = {
    title: 'Meal Tracker',
    header: {
      backTitle: 'Tracker',
      ...NAV_STYLES,
    },
  }
  constructor(props) {
    super(props);
    this.throttledGoToWeek = _.throttle(this.goToWeek, 1000, { trailing: false });
  }
  goToWeek = (start) => {
    // alert(start)
    this.props.navigation.navigate('WeekView', { start });
  }
  render() {
    console.log(this.throttledGoToWeek())
    return <TimeLine showWeek={this.throttledGoToWeek} />;
  }
}

export default TrackerScreen;
