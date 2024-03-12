import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    repairCategories: [],
    repairCategory: {},
    loading: false,
    error: false
}
export const repairCategorySlice = createSlice({
    name: 'repairCategory',
    initialState,
    reducers: {
        repairCategoryList: (state, { payload }) => {
            state.repairCategories = payload
        }
    }
})

export const { repairCategoryList } = repairCategorySlice.actions;
export default repairCategorySlice.reducer;