import React from "react";
import { CompositeContainer, Container, CustomContainer, RealTimeContainer } from "./style";
import CustomChart from "../CustomChart/CustomChart";
import CompositeChart from "../CompositeChart/CompositeChart";
import RealTimeChart from "../RealTimeChart/RealTimeChart";

const ChartDisplay: React.FC = () => {
  return (
    <Container>
      <CustomContainer>
        <CustomChart />
      </CustomContainer>
      <CompositeContainer>
        <CompositeChart />
      </CompositeContainer>
      <RealTimeContainer>
        <RealTimeChart />
      </RealTimeContainer>
    </Container>
  );
};

export default ChartDisplay;