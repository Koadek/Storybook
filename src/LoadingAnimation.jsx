import React, { Component } from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';
import './App.css';
import { relative } from 'path';

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
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: #2196f3;
  outline: none;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
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
      <div style={{ position: relative }}>
        <Wrapper className={this.state.fade ? 'fade-in' : 'fade-out'}>
          <PacmanLoader
            css={override}
            sizeUnit={'px'}
            size={50}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </Wrapper>
        <Wrapper className={this.state.timerFade ? 'fade-out' : 'fade-in'}>
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
        </Wrapper>
      </div>
    );
  }
}

export default LoadingAnimation;
