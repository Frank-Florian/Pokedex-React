import { createSlice } from '@reduxjs/toolkit';

export const perPageSlice = createSlice({
		name: 'perPage',
    initialState: 20,
    reducers: {
      getPerPage: (state, action) => {
        const perPage = action.payload;
        return perPage
    }
    }
})

export const { getPerPage } = perPageSlice.actions;

export default perPageSlice.reducer;