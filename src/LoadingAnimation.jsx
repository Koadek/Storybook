import React, { Component } from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
import styled, { keyframes } from 'styled-components';

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleStart() {
    this.setState({ loading: true });
    setTimeout(this.handleStop, this.state.value * 1000);
  }

  handleStop() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading && (
          <PacmanLoader
            css={override}
            sizeUnit={'px'}
            size={50}
            color={'#123abc'}
            loading={this.state.loading}
            out={!this.state.visible}
          />
        )}
        <label>
          Time:
          <Input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          secondes
        </label>
        <Button onClick={this.handleStart}>Start</Button>
      </div>
    );
  }
}

export default LoadingAnimation;
