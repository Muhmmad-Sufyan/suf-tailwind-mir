import { configureStore } from "@reduxjs/toolkit";
import repairCategorySlice from "./repairCategory/repairCategorySlice";
import authSclice from "./feature/authSclice";
export const store = configureStore({
    reducer: {
        auth: authSclice,
        repairCategory: repairCategorySlice
    }
})