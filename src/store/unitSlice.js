import { createSlice } from "@reduxjs/toolkit";
import { loadUnit, saveUnit } from "../utils/localStorage";

const initialState = {
    value: loadUnit(),
};

const unitSlice = createSlice({
    name: "unit", 
    initialState,
    reducers: {
        setUnit: (state, action) => {
            state.value = action.payload;
            saveUnit(action.payload);
        },
    },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;