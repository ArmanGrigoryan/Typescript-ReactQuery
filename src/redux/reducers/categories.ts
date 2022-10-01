import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { CategoriesState, StatusType } from '../../interfaces';
import { getCategoriesData } from '../actions/categories.actions';

const initialState: CategoriesState = {
    items: [],
    status: 'idle',
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesData.pending, (state) => {
                state.status = 'loading' as typeof StatusType;
            })
            .addCase(getCategoriesData.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.status = 'idle';
            })
            .addCase(getCategoriesData.rejected, (state) => {
                state.status = 'failed' as typeof StatusType;
            });
    },
});

export const selectCategories = (state: RootState) => state.categories.items;

export default categoriesSlice.reducer;
