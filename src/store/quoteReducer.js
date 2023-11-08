import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandonQuotes } from "../services/service";

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
            alert("Item Added")
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotes.fulfilled, (state, action) => {
                state.quote = action.payload
            })
    }
})
export const { add } = quoteSlice.actions
export default quoteSlice.reducer;