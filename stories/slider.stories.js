import React from 'react';

import { storiesOf } from '@storybook/react';

import { Body } from '../packages/modal/';

class TestWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      p1: 1,
      p2: 2,
      p3: 3
    }
  }
    render(){
      return(
        <Body styleName="main-container">
        <div styleName="Welcome">
          <a href="#">Welcome To My Portfolio</a>
        </div>
        <div styleName="main-pics-cont">
          <div>
            <img styleName="car-pix" src={require(`../packages/modal/src/slider/pix/${this.state.p1}.jpg`)} alt="k" />
          </div>
          <div>
            <img styleName="car-pix" src={require(`../packages/modal/src/slider/pix/${this.state.p2}.jpg`)} alt="k" />
          </div>
          <div>
            <img styleName="car-pix" src={require(`../packages/modal/src/slider/pix/${this.state.p3}.jpg`)} alt="k" />
          </div>
        </div>
        <div>
          {/* <button styleName="buttonL" onClick={() => {
            console.log('Left')
            if (this.state.p1 === 1) {
              this.setState({ p1: 5, p2: 1, p3: 2 })
            } else if (this.state.p2 === 1) {
              this.setState({ p1: 4, p2: 5, p3: 1 })
            } else if (this.state.p3 === 1) {
              this.setState({ p1: 3, p2: 4, p3: 5 })
            } else {
              this.setState({ p1: this.state.p1 - 1, p2: this.state.p2 - 1, p3: this.state.p3 - 1 })
            }
          }} >Left</button>
          <button styleName="buttonR" onClick={() => {
            console.log('Right')
            if (this.state.p1 === 5) {
              this.setState({ p1: 4, p2: 5, p3: 1 })
            } else if (this.state.p2 === 5) {
              this.setState({ p1: 5, p2: 1, p3: 2 })
            } else if (this.state.p3 === 5) {
              this.setState({ p1: 1, p2: 2, p3: 3 })
            } else {
              this.setState({ p1: this.state.p1 + 1, p2: this.state.p2 + 1, p3: this.state.p3 + 1 })
            }
          }} >Right</button> */}
      </div>
    </Body> 
      )
    }
  };

  storiesOf('Simple Slider', module).add('hidden with display: none', () => <TestWrapper />);

  // src={require(`../packages/modal/src/slider/pix${this.state.p1}.jpg`)} 