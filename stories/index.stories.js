import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal, { Header, Body, Footer, Close } from '../packages/modal/src'


class TestWrapper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
     };
    }

    toggleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    };

    submifForm = () => {
      console.log('Here I am');
    };

    render(){
      const { showModal } = this.state;

      return(
        <div>
          <button type="button" onClick={this.toggleModal}>
            show me!
          </button>
          
          <div>
            <Modal isOpen={showModal} toggleModal={this.toggleModal}>
              <Header>
                <div>
                  Games
                </div>
                <Close toggleModal={this.toggleModal}>X</Close>
                </Header>
              <Body>
                <div>
                  <button><img src={ require("./blackOps4.jpg") } alt="lol" /></button>
                </div>
              </Body>
              <Footer>
                <Close toggleModal={this.toggleModal}>Buy Games</Close>
              </Footer>
            </Modal>
          </div>
        </div>
      )
    }
  };

  storiesOf('Simple Modal', module).add('hidden with display: none', () => <TestWrapper />);