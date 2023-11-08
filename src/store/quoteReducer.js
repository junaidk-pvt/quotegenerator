import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandonQuotes } from "../services/service";
import toast from "react-hot-toast";

export const fetchQuotes = createAsyncThunk(
    "quote/fetch",
    async (params) => {
        const res  = await getRandonQuotes(params)
        return res;
    }
)
const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: [],
        bookmark: [],

    },
    reducers: {
        add(state, action) {
            state?.bookmark?.push(action.payload)
            toast("Quotes Added Sucessfully ✔️")
        },
        remove(state, action){
            state.bookmark = state.bookmark.filter(item => item._id !== action.payload._id);
            toast("Quotes Removed Sucessfully ✔️")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotes.fulfilled, (state, action) => {
                state.quote = action.payload
            })
    }
})
export const { add, remove } = quoteSlice.actions
export default quoteSlice.reducer;