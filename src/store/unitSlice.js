import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "C",
};

const unitSlice = createSlice({
    name: "unit", 
    initialState,
    reducers: {
        setUnit: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;