import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    count : 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increase : (state, action) => {
            state.count += action.payload
            console.log(action); 
        },
        decrease : (state, action) => { 
            state.count -= action.payload
            console.log(action);
        }, 
    }
});


export const counterReducer = counterSlice.reducer;

export const counterAction = counterSlice.actions;