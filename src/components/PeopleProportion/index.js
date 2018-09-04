import React, { Component } from 'react';
import personBlue from './person-blue.png';
import personGrey from './person-grey.png';
import './PeopleProportion.css';

class PeopleProportion extends Component {
  render() {

    const iconWidth  = 12;
    const iconHeight = 16;

    const percent  = this.props.actual / this.props.possible;
    const iconsOn  = Math.floor(this.props.size * percent);
    const iconsOff = this.props.size - iconsOn;

    const on  = [...Array(iconsOn )].map((e, i) => <img width={iconWidth} height={iconHeight} key={i} src={personBlue} alt="Blue icon" />);
    const off = [...Array(iconsOff)].map((e, i) => <img width={iconWidth} height={iconHeight} key={i} src={personGrey} alt="Grey icon" />);

    return (
      <div className="people-proportion">
        <div className="people-proportion-images">
          {on}
          {off}
        </div>
      </div>
    );
  }
}

export default PeopleProportion;

