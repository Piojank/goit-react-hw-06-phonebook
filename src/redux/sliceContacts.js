import { combineReducers, createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './sliceFilter';

const contactsInitialState = [
  { id: nanoid(5), name: 'Hermione Kline', number: '645-17-19' },
  { id: nanoid(5), name: 'Eden Clements', number: '443-89-12' },
  { id: nanoid(5), name: 'Annie Copeland', number: '459-12-56' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addMyContact(state, action) {
      state.push(action.payload);
    },
    deleteMyContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addMyContact, deleteMyContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts.contacts;

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  rootReducer
);