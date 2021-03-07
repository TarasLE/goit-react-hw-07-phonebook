const getLoading = (state) => state.contacts.loading
const getFilter = (state) => state.contacts.filter
const getContacts = (state) => state.contacts.items

const getfilteredElements = (state) => {
    const filter = getFilter(state)
    const contacts = getContacts(state)
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
    )
}

export default {
    getLoading,
    getFilter,
    getfilteredElements,
    getContacts,
}
