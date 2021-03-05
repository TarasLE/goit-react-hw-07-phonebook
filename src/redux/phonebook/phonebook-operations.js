import axios from 'axios'
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:4040'

const addContact = (contact) => (dispatch) => {
    // const newContact = { contact }

    // dispatch({ type: 'contact/addContactRequest' })
    dispatch(addContactRequest())

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            // dispatch({ type: 'contact/addContactSuccess', payload: data })
            dispatch(addContactSuccess(data))
        )
        .catch((error) =>
            // dispatch({ type: 'contact/addContactError', payload: error })
            dispatch(addContactError(error))
        )
}

const deleteContact = (contactId) => (dispatch) => {
    dispatch(deleteContactRequest())

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch((error) => dispatch(addContactError(error)))
}

export default { addContact, deleteContact }
