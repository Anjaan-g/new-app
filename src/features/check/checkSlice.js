import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import checkService from './checkService';

const checkInitialState = {
  isLoading: false,
  isError: false,
  user: null,
};

//Fetch Users
export const fetchUsers = createAsyncThunk('check/users', async (user, thunkAPI) => {
  try {
    return await checkService.getUsers();
  } catch (error) {
    const message = 'Something is Wrong!!';
    return thunkAPI.rejectWithValue(message);
  }
});

export const checkSlice = createSlice({
  name: 'check',
  initialState: checkInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isError = action.payload;
      });
  },
});

export default checkSlice.reducer;

export const selectFetchedUsers = state => state.check.user;
