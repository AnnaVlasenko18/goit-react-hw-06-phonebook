import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],

  reducers: {
    onAdd(state, actions) {
      const existingContact = state.some(
        ({ name }) => actions.payload.values.name === name
      );
      if (existingContact) {
        alert(`${actions.payload.values.name} is already in contacts`);
        return;
      }
      state.push({
        id: nanoid(),
        name: actions.payload.values.name,
        number: actions.payload.values.number,
      });
    },

    onDelete(state, actions) {
      return state.filter(item => item.id !== actions.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { onAdd, onDelete } = contactsSlice.actions;
