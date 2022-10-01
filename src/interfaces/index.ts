export const StatusType = 'idle' || 'loading' || 'failed';

export interface CatData {
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface CatState {
    items: Array<CatData>;
    status: typeof StatusType;
    selectedCategory: string;
}

export interface CategoriesData {
    id: string;
    name: string;
}

export interface CategoriesState {
    items: Array<CategoriesData>,
    status: typeof StatusType;
}
