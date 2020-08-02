import React from "react";
import styled from "styled-components";

export default function ChatBox({ text, isQuestion }) {
  return (
    <Wrapper
      style={{ background: `${isQuestion ? "transparent" : "#333333"}` }}
    >
      <p style={{ color: `${isQuestion ? "#333333" : "white"}` }}>{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 360px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #333333;
  padding: 10px 30px;
`;
