import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../';
import { CatState, StatusType } from '../../interfaces';
import { getCatData, loadMoreCatData } from '../actions';

const initialState: CatState = {
    items: [],
    status: 'idle',
    selectedCategory: "1",
};

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        setSelectedCategory: (state, { payload }) => {
            state.selectedCategory = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCatData.pending, (state) => {
                state.status = 'loading' as typeof StatusType;
            })
            .addCase(getCatData.fulfilled, (state, { payload }) => {
                state.status = 'idle';
                state.items = payload;
            })
            .addCase(getCatData.rejected, (state) => {
                state.status = 'failed' as typeof StatusType;
            })
            .addCase(loadMoreCatData.pending, (state) => {
                state.status = 'loading' as typeof StatusType;
            })
            .addCase(loadMoreCatData.fulfilled, (state, { payload }) => {
                state.items = state.items.concat(payload);
                state.status = 'idle';
            })
            .addCase(loadMoreCatData.rejected, (state) => {
                state.status = 'failed' as typeof StatusType;
            });
    },
});

export const { setSelectedCategory } = catSlice.actions;
export const selectCatState = (state: RootState) => state.cats;

export default catSlice.reducer;
