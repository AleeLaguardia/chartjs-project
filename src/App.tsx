import React from 'react';
import CustomChart from './components/CustomChart/CustomChart';
import CompositeChart from './components/CompositeChart/CompositeChart';
import RealTimeChart from './components/RealTimeChart/RealTimeChart';
import { Provider } from 'react-redux';
import store from './store';
import ChartDisplay from './components/ChartDisplay';

const App: React.FC = () => {
  return (
    <ChartDisplay />
  );
};

export default App;
