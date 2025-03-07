import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'MONSTER SARAVANA' },
    { id: '1', name: 'CAPTAIN MILLER' },
    { id: '2', name: 'INVINCIBLE MIKEY' }

]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})
export const selectAllUsers = (state) => state.users;
 
export default usersSlice.reducer