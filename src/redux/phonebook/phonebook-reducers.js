import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    // deleteContact,
    changeFilter,
} from './phonebook-actions'

// const { addContactSuccess, addContactRequest, addContactError } = actions

const items = createReducer([], {
    // [actions.addContact]: (state, { payload }) => [...state, payload],
    [addContactSuccess]: (state, { payload }) => [...state, payload],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
})
const filter = createReducer('', {
    [changeFilter]: (state, { payload }) => payload,
})
const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
})
export default combineReducers({
    items,
    filter,
    loading,
})
