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
const getBookmark = () => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};

const saveBookmark = (bookmarks) => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
const removeBookmark = (quoteId) => {
    const bookmarks = getBookmark();
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark._id !== quoteId);
    saveBookmark(updatedBookmarks);
  };
const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: [],
        bookmark: getBookmark(),

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
                saveBookmark(state.bookmark)
            }

        },
        remove(state, action) {
            state.bookmark = state.bookmark.filter(item => item._id !== action.payload._id);
            toast?.success("Quotes Removed Sucessfully")
            removeBookmark(action.payload._id)
           
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