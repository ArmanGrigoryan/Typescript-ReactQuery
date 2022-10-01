import { createAsyncThunk } from "@reduxjs/toolkit";
import { CatData } from "../../interfaces";

export const getCatData = createAsyncThunk('cat/getData', async function ({
    pageNumber = "1",
    category_id = "1",
}: {pageNumber?: string, category_id?: string}): Promise<Array<CatData>> {
    const url = new URL('https://api.thecatapi.com/v1/images/search');
    url.searchParams.append('limit', '10');
    url.searchParams.append('page', `${pageNumber}`);
    url.searchParams.append('category_ids', `${category_id}`);
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
});

export const loadMoreCatData = createAsyncThunk('cat/loadMoreData', async function ({
    category_id,
}: {category_id: string}): Promise<Array<CatData>> {
    const url = new URL('https://api.thecatapi.com/v1/images/search');
    url.searchParams.append('limit', '10');
    url.searchParams.append('page', '1');
    url.searchParams.append('category_ids', `${category_id}`);
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
});