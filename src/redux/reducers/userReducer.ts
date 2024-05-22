import {createSlice} from '@reduxjs/toolkit';



interface State {
  completedVocabularies: string[];
  completedListening: string[];
  completedReading: string[];
  completedMemory: string[];
  completedWriting: string[];
  name : string;
  image : any;

}

const initialState: State = {
  completedVocabularies: [],
  completedListening: [],
  completedReading: [],
  completedMemory: [],
  completedWriting: [],
  name : '',
  image : null,

};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCompletedVocabulary: (state, action) => {
      console.log('UserPayload completedVocabularies...', action.payload, state)
      const updatedCompletedVocabularies = [...state.completedVocabularies, action.payload];
      return { ...state, completedVocabularies: updatedCompletedVocabularies };
    },
    setCompletedListening: (state, action) => {
      console.log('UserPaylod   completedListening...     ',action.payload)
      const updatedCompletedListening = [...state.completedListening, action.payload];
      return { ...state, completedListening: updatedCompletedListening };
    },
    setCompletedReading: (state, action) => {
      console.log('UserPaylod   completedReading...     ',action.payload)
      const updatedCompletedReading = [...state.completedReading, action.payload];
      return { ...state, completedReading: updatedCompletedReading };
    },
    setCompletedMemory: (state, action) => {
      console.log('UserPaylod   completedMemory...     ',action.payload)
      const updatedCompletedMemory = [...state.completedMemory, action.payload];
      return { ...state, completedMemory: updatedCompletedMemory };
    },
    setCompletedWriting: (state, action) => {
      console.log('UserPaylod completedWriting  ...     ',action.payload)
      const updatedCompletedWriting = [...state.completedWriting, action.payload];
      return { ...state, completedWriting: updatedCompletedWriting };
    },
    setName : (state, action) => {
      console.log('UserPaylod setName  ...     ',action.payload)
      state.name = action.payload;
    },
    setImage : (state, action) => {
      console.log('UserPaylod setImage  ...     ',action.payload)
      state.image = action.payload;
    }
   
  },
});

export const {setCompletedVocabulary,setCompletedListening,setCompletedReading,setCompletedMemory,setCompletedWriting,setName,setImage
} = userReducer.actions;

export default userReducer.reducer;













// setCompletedVocabularyNumber,setCompletedListeningNumber,setCompletedReadingNumber,setCompletedMemoryNumber,setCompletedWritingNumber

// setCompletedVocabularyNumber: (state, action) => {
//   console.log('UserPaylod   setCompletedVocabularyNumber...     ',action.payload)
//   state.completedVocabulariesNumber = action.payload;
// },
// setCompletedListeningNumber: (state, action) => {
//   console.log('UserPaylod   setCompletedListeningNumber...     ',action.payload)
//   state.completedListeningNumber = action.payload;
// },
// setCompletedReadingNumber: (state, action) => {
//   console.log('UserPaylod   setCompletedReadingNumber...     ',action.payload)
//   state.completedReadingNumber = action.payload;
// },
// setCompletedMemoryNumber: (state, action) => {
//   console.log('UserPaylod   setCompletedMemoryNumber...     ',action.payload)
//   state.completedMemoryNumber = action.payload;
// },
// setCompletedWritingNumber: (state, action) => {
//   console.log('UserPaylod setCompletedWritingNumber  ...     ',action.payload)
//   state.completedWritingNumber = action.payload;
// },