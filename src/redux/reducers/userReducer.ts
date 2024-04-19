import {createSlice} from '@reduxjs/toolkit';



interface State {
  completedVocabularies: string[];
  completedListening: string[];
  completedReading: string[];
  completedMemory: string[];
  completedWriting: string[];

}

const initialState: State = {
  completedVocabularies: [],
  completedListening: [],
  completedReading: [],
  completedMemory: [],
  completedWriting: [],

};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCompletedVocabulary: (state, action) => {
      console.log('UserPaylod   completedVocabularies...     ',action.payload)
      state.completedVocabularies = action.payload;
    },
    setCompletedListening: (state, action) => {
      console.log('UserPaylod   completedListening...     ',action.payload)
      state.completedListening = action.payload;
    },
    setCompletedReading: (state, action) => {
      console.log('UserPaylod   completedReading...     ',action.payload)
      state.completedReading = action.payload;
    },
    setCompletedMemory: (state, action) => {
      console.log('UserPaylod   completedMemory...     ',action.payload)
      state.completedMemory = action.payload;
    },
    setCompletedWriting: (state, action) => {
      console.log('UserPaylod completedWriting  ...     ',action.payload)
      state.completedWriting = action.payload;
    },
  },
});

export const {setCompletedVocabulary,setCompletedListening,setCompletedReading,setCompletedMemory,setCompletedWriting } = userReducer.actions;

export default userReducer.reducer;
