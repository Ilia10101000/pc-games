import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsList = createAsyncThunk('product/fetchProductsList',async (_,{rejectWithValue}) => {
    try{
        const data = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
        if(!data.ok){
            throw new Error('some products error')
        }
        const response = data.json();
        return response
    }catch(e){
        return rejectWithValue(e.message)
    }
})

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[],
        error:null,
        status:null
    },
    extraReducers: builder => {
        builder.addCase(fetchProductsList.pending, state => {
            state.error = null;
            state.status = 'loading';
        }).addCase(fetchProductsList.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'resolved';
            state.product = action.payload;
        }).addCase(fetchProductsList.rejected, (state, action) => {
            state.error = action.payload;
            state.status = 'rejected';
        })
    }

});

export const productReducer = productSlice.reducer