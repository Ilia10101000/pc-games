import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const fetchCategoryList = createAsyncThunk('category/fetchCategoryList', async (_,{rejectWithValue}) => {
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        if(response.ok){
            const data = response.json();
            return data
        } else {
            throw new Error('some error')
        }
    } catch(e){
        rejectWithValue(e.message)
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
        fetchCategoryList(state, action){
            state.category = action.payload.list
        }
    },
    extraReducers: builder =>{
        builder.addCase(fetchCategoryList.pending, state => {
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchCategoryList.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'completed';
            state.category = action.payload
        }).addCase(fetchCategoryList.rejected, state => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
    
})