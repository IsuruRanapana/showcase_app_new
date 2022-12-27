// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/27/2022 => 12:27 PM  *** //


import {configureStore} from '@reduxjs/toolkit';
import voiceReducer from '../features/voice_command/voiceCommandSlice'

export const store = configureStore({
    reducer:{
        voiceCommander: voiceReducer,
    }
})
