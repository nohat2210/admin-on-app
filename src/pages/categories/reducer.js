import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const categoriesAdapter = createEntityAdapter({});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {
    categoryLoading(state) {
      state.loading = true;
    },
    categoryAll: categoriesAdapter.addMany,
    categoryAdded: categoriesAdapter.addOne,
    categoryRemove: categoriesAdapter.removeOne,
  },
});

export const categorySelectors = categoriesAdapter.getSelectors(
  state => state.categories,
);
const { reducer } = categoriesSlice;
export const { actions } = categoriesSlice;
export default reducer;
