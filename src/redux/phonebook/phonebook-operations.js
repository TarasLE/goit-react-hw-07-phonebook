import axios from 'axios'
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:4040'

const fetchContacts = () => async (dispatch) => {
    dispatch(fetchContactRequest())
    try {
        const { data } = await axios.get('/contacts')
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error))
    }

    // axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
    //     .catch((error) =>
    //         // dispatch({ type: 'contact/addContactError', payload: error })
    //         dispatch(fetchContactError(error))
    //     )
}

const addContact = (contact) => async (dispatch) => {
    // const newContact = { contact }

    // dispatch({ type: 'contact/addContactRequest' })
    dispatch(addContactRequest())

    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(addContactSuccess(data))
    } catch (error) {
        dispatch(addContactError(error))
    }
    // axios
    //     .post('/contacts', contact)
    //     .then(({ data }) =>
    //         // dispatch({ type: 'contact/addContactSuccess', payload: data })
    //         dispatch(addContactSuccess(data))
    //     )
    //     .catch((error) =>
    //         // dispatch({ type: 'contact/addContactError', payload: error })
    //         dispatch(addContactError(error))
    //     )
}

const deleteContact = (contactId) => async (dispatch) => {
    dispatch(deleteContactRequest())
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`)
        dispatch(deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(deleteContactError(error))
    }
    //     axios
    //         .delete(`/contacts/${contactId}`)
    //         .then(() => dispatch(deleteContactSuccess(contactId)))
    //         .catch((error) => dispatch(deleteContactError(error)))
}

export default { addContact, deleteContact, fetchContacts }
