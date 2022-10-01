import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catReducer from '../redux/reducers/cat';
import categoriesReducer from '../redux/reducers/categories';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        cats: catReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
