import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, email) => {
            if(!state.users.includes(email)){
                state.users.push(email);
            }
        }
    }
})

export const { add } = userSlice.actions;

export default userSlice.reducer;