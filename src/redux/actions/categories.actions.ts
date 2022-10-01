import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesData } from "../../interfaces";

export const getCategoriesData = createAsyncThunk('categories/getData', async function (): Promise<Array<CategoriesData>> {
    const resp = await fetch('https://api.thecatapi.com/v1/categories');
    const data = await resp.json();
    return data;
});