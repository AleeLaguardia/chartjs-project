import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import chartSlice from '../../../store/chartSlice';
import CustomChart from '../CustomChart';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/theme';

const store = configureStore({
  reducer: {
    chart: chartSlice,
  },
});

jest.mock('hammerjs');

describe('Unit test for CustomChart Component', () => {
  it('Renders with default props and styles', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CustomChart />
        </Provider>
      </ThemeProvider>
    );
    
    expect(asFragment).toMatchSnapshot();
  });
});