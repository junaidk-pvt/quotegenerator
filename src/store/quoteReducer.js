import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandonQuotes } from "../services/service";
import toast from "react-hot-toast";

export const fetchQuotes = createAsyncThunk(
    "quote/fetch",
    async (params) => {
        const res = await getRandonQuotes(params)
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
            const newQuote = action.payload;
            const isDuplicate = state.bookmark.some(quote => quote._id === newQuote._id);

            if (isDuplicate) {
                toast.error("Quote already exists in bookmarks");
            } else {
                state.bookmark.push(newQuote);
                toast.success("Quote added successfully");
            }

        },
        remove(state, action) {

            state.bookmark = state.bookmark.filter(item => item._id !== action.payload._id);
            toast?.success("Quotes Removed Sucessfully")
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