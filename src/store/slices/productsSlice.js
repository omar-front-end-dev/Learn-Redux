import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (args, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get("http://localhost:3000/products");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addProduct = createAsyncThunk("products/addProduct", async (product, thunkAPI) =>{
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.post("http://localhost:3000/products", product)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, thunkAPI) =>{
    const { rejectWithValue } = thunkAPI
    try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        return id;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.fulfilled, (state, action) =>{
                let newProducts = state.products.filter(product => product.id != action.payload)
                state.products = newProducts
            })
    }
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
