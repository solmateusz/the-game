import React from "react";
import styled from "styled-components";

export const PageFrame: React.FC = (props) => {
  return (
    <ContainerDiv>
      <ContentDiv>{props.children}</ContentDiv>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  position: absolute; 
  top: 0;
`;

const ContentDiv = styled.div`
  max-width: 40rem;
  width: 40rem;
  background: #52006a;
  color: #ff7600;
  padding: 2rem;
  height: 85%;
  min-height: 32rem;
  border-radius: 1rem;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr;
  text-align: center;
  box-shadow: rgba(17, 17, 26, 0.2) 0px 2px 24px,
    rgba(17, 17, 26, 0.2) 0px 2px 56px, rgba(17, 17, 26, 0.4) 0px 2px 80px;
`;
