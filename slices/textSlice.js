import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getText = createAsyncThunk(
    'text/getTextbyCount',
    async (count,format) => {
      const {data} = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${format}`)
      return data
    }
  )
    

const textSlice = createSlice({
    name:"text",
    initialState:{
        text:"",
        status:"",
        message:""
    },extraReducers:(builder)=>{
        builder.addCase(getText.pending,(state,action)=>{
            state.status = "loading"
        }),
        builder.addCase(getText.fulfilled,(state,action)=>{
            state.text = action.payload
            state.status = "success"
        }),
        builder.addCase(getText.rejected,(state,action)=>{
            state.status = "rejected"
        })
    }

})
export default textSlice.reducer