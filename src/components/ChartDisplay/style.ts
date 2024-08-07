import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'custom composite realTime';
  grid-gap: 20px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: fit-content;
  }
`;

export const CustomContainer = styled.div`
  grid-area: custom;
  height: 100%;
  width: 100%;
`;

export const CompositeContainer = styled.div`
  grid-area: composite;
  height: 100%;
  width: 100%;
`;

export const RealTimeContainer = styled.div`
  grid-area: realTime;
  height: 100%;
  width: 100%;
`;

