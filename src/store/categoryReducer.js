import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const availableCategories = ['Shoes', 'nuevo', 'Others', 'Furniture'];

export const fetchCategoryList = createAsyncThunk('category/fetchCategoryList', async (_,{rejectWithValue}) => {
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
 
        if(!response.ok){
            throw new Error('some error')
        } 
        const data = await response.json();
        const modifiedCategories = [];
        console.log(data)
        data.forEach( category => {
            if(availableCategories.includes(category.name) 
            && modifiedCategories.every(item => item.name !== category.name)){
                modifiedCategories.push(category)
            }
        });
        return modifiedCategories
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
    extraReducers: builder =>{
        builder.addCase(fetchCategoryList.pending, state => {
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchCategoryList.fulfilled, (state, action) => {
            state.status = 'success';
            state.error = null;
            state.category = action.payload;
        }).addCase(fetchCategoryList.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
    
});

export const categoryReducer = categorySlice.reducer