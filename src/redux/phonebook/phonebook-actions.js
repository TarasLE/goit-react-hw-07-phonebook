import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4040'

const addContact = (text) => (dispatch) => {
    const contact = { text }

    dispatch({ type: 'contact/addContactRequest' })

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch({ type: 'contact/addContactSuccess', payload: data })
        )
        .catch((error) =>
            dispatch({ type: 'contact/addContactError', payload: error })
        )
}
// const addContact = createAction('contact/add')
const deleteContact = createAction('contact/delete')
const changeFilter = createAction('contact/changeFilter')

export default { addContact, deleteContact, changeFilter }
