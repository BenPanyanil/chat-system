import React, { useState } from "react";
import styled from "styled-components";

export default function ChatButton() {
  const [command, setCommand] = useState(true);

  return (
    <Wrapper onClick={() => setCommand(!command)}>
      {command ? "Open" : "Close"}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
  border-radius: 50%;
  background: #ededed;

  display: flex;
  justify-content: center;
  align-items: center;
`;
