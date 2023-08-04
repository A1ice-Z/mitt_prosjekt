import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const loginUser = createAsyncThunk('auth/loginUser', async (user) => {
    const response = await axios.post('http://localhost:8000/api/login/', user);
    return response.data;
});

// const createUser =

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        status: 'idle',
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = jwt_decode(action.payload.token);
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state) => {
                state.status = 'failed';
                state.isAuthenticated = false;
            });
    },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;

