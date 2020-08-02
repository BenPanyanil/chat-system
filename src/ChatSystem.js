import React, { Component } from "react";
import styled from "styled-components";

import ChatButton from "./components/ChatButton";
import BackButton from "./components/BackButton";
import ChatBox from "./components/ChatBox";

export default class ChatSystem extends Component {
  render() {
    return (
      <Wrapper>
        <div class="backButton">
          <BackButton />
        </div>
        <div class="chatBoxContainer">
          <ChatBox text="Is this a chatbox?" isQuestion={false} />
        </div>
        <div class="chatButton">
          <ChatButton />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 400px;
  height: 650px;
  margin: 0 auto;
  border: 1px solid;
  position: relative;

  .chatButton {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .backButton {
    margin: 10px;
  }

  .chatBoxContainer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 140px;
  }
`;
