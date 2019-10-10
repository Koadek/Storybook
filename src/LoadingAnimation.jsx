import React, { Component } from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';
import './App.css';

const override = css`
  display: block;
  margin-bottom: 100px;
  border-color: red;
`;

const Input = styled.input`
  width: 26px;
  margin: 2px;
`;

const Button = styled.button`
  border: 1px solid rgb(238, 238, 238);
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 15px;
  padding: 3px 10px;
  margin: 10px;
  outline: none;
`;

class LoadingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      loading: false,
      fade: false,
      timerFade: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleFadeOut = this.handleFadeOut.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleStart() {
    if (this.state.value > 0) {
      this.setState({ timerFade: true });
      setTimeout(this.handleAnimation, 2000);
    }
    return;
  }

  handleAnimation() {
    this.setState({ loading: true, fade: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, this.state.value * 1000 + 4000);
    setTimeout(this.handleFadeOut, this.state.value * 1000 + 2000);
  }

  handleFadeOut() {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ timerFade: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        <div className={this.state.fade ? 'fade-in' : 'fade-out'}>
          <PacmanLoader
            css={override}
            sizeUnit={'px'}
            size={50}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
        <div className={this.state.timerFade ? 'fade-out' : 'fade-in'}>
          <label>
            Time:
            <Input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              min="1"
              step="1"
            />
            secondes
          </label>
          <Button onClick={this.handleStart}>Start</Button>
        </div>
      </div>
    );
  }
}

export default LoadingAnimation;
