import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartState {
  data: number[]
};

const initialState: ChartState = {
  data: [10, 20, 30, 40, 50],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = chartSlice.actions;

export default chartSlice.reducer;