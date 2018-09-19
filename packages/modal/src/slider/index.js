import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import {BodyContainer } from './styles'

class SliderEntry extends Component {
  render(){
    return (
      <Container>
        <Content>
        </Content>      
      </Container>
    );
  }
}
export class Body extends Component {
  render() {
    return <BodyContainer>{this.props.children}</BodyContainer>
  }
}
export class Header extends Component {
  render() {
    return <HeaderContainer>{this.props.children}</HeaderContainer>
  }
}
export class Section extends Component {
  render() {
    return <SectionContainer>{this.props.children}</SectionContainer>
  }
}
export class Footer extends Component {
  render() {
    return <FooterContainer>{this.props.children}</FooterContainer>
  }
}
export class AllBtn extends Component {
  render() {
    return <AllBtnContainer onClick = {this.props.toggleModal}>{this.props.children}</AllBtnContainer>
  }
}
export default SliderEntry;
