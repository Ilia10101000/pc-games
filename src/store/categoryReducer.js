import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoryList = createAsyncThunk('category/fetchCategoryList', async (_,{rejectWithValue}) => {
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
 
        if(!response.ok){
            throw new Error('some error')
        } 
        const data = response.json();
        return data
    } catch(e){
        return rejectWithValue(e.message)
    }
})
const categorySlice = createSlice({
    name:'category',
    initialState:{
        category:[],
        status:null,
        error:null
    },
    reducers:{
        fetchCategoryList:(state, action) => {
            state.category = action.payload.list
        }
    },
    extraReducers: builder =>{
        builder.addCase(fetchCategoryList.pending, state => {
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchCategoryList.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'success';
            state.category = action.payload
        }).addCase(fetchCategoryList.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
    
});

export const categoryReducer = categorySlice.reducer