// src/store/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://65c60639e5b94dfca2e0c98d.mockapi.io/listting/users');
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
        },
        updateUser: (state, action) => {
            const index = state.data.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter(user => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addUser, updateUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
