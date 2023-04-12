import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, {payload}) => {
      const existingContact = state.contacts.find(
      (contact) => contact.name === payload.name
      );
      if (!existingContact) {
        state.contacts.push(payload);
      } else {
        alert(`${payload.name} is already in contacts.`);
      }
    },
    onRemove: (state, {payload}) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },

    updateFilter: (state, {payload}) => {
      state.filter = payload;
    },
  },
});
console.log(contactsSlice)

export const { addContact, onRemove, updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

