import { createAction } from '@reduxjs/toolkit'
// import axios from 'axios'
// axios.get('/contacts').then((response) => response.data)
// axios.defaults.baseURL = 'http://localhost:4040'

export const fetchContactRequest = createAction('contact/fetchContactRequest')
export const fetchContactSuccess = createAction('contact/fetchContactSuccess')
export const fetchContactError = createAction('contact/fetchContactError')

export const addContactRequest = createAction('contact/addContactRequest')
export const addContactSuccess = createAction('contact/addContactSuccess')
export const addContactError = createAction('contact/addContactError')

export const deleteContactRequest = createAction('contact/deleteContactRequest')
export const deleteContactSuccess = createAction('contact/deleteContactSuccess')
export const deleteContactError = createAction('contact/deleteContactError')

export const deleteContact = createAction('contact/delete')
export const changeFilter = createAction('contact/changeFilter')
// export const addContact = createAction('contact/add')

// export default {
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContact,
//     changeFilter,
// }

// const addContact = (text) => (dispatch) => {
//     const contact = { text }

//     dispatch({ type: 'contact/addContactRequest' })

//     axios
//         .post('/contacts', contact)
//         .then(({ data }) =>
//             dispatch({ type: 'contact/addContactSuccess', payload: data })
//         )
//         .catch((error) =>
//             dispatch({ type: 'contact/addContactError', payload: error })
//         )
// }
