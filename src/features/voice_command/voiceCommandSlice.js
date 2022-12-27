// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/21/2022 => 8:09 PM  *** //


import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    linkedFeature: '',
}

export const voiceCommandSlice = createSlice({
    name: 'voiceCommander',
    initialState,
    reducers: {
        openMap:(state,action)=>{
            state.linkedFeature = action.payload.linkedFeature;
        },
        openYoutube:(state,action)=>{
            state.linkedFeature = action.payload.linkedFeature;
        },
        sendMail:(state,action)=>{
            state.linkedFeature = action.payload.linkedFeature;
        }
    }
});

export const {openMap, openYoutube} = voiceCommandSlice.actions;
export default voiceCommandSlice.reducer;
