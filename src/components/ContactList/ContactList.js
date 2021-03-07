import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Filter from '../Filter/Filter'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import { changeFilter } from '../../redux/phonebook/phonebook-actions'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'
import './ContactList.css'

class ContactList extends Component {
    // static defaultProps = {
    //     filteredContacts,
    //     deleteContact,
    //     resetFilter,
    //     contacts,
    // }
    // componentDidMount() {
    //     this.props.fetchContacts()
    // }

    render() {
        const {
            filteredContacts,
            contacts,
            deleteContact,
            resetFilter,
        } = this.props
        return (
            <div className={styles.Container}>
                <TransitionGroup
                    component="ul"
                    classnames={styles.ListContainer}
                >
                    {filteredContacts.map((contact) => (
                        <CSSTransition
                            timeout={250}
                            classNames={{
                                enter: styles.ContactListItemFadeEnter,
                                enterActive:
                                    styles.ContactListItemFadeEnterActive,
                                exit: styles.ContactListItemFadeExit,
                                exitActive:
                                    styles.ContactListItemFadeExitActive,
                            }}
                            key={contact.id}
                        >
                            <li className={styles.Contact}>
                                <span className={styles.ContactInfo}>
                                    {contact.name} : {contact.number}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteContact(contact.id)
                                        if (contacts.length == 2) {
                                            resetFilter()
                                        }
                                    }}
                                    className={styles.DeleteBtn}
                                >
                                    Delete
                                </button>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }
}

ContactList.propTypes = {
    filteredContacts: PropTypes.array.isRequired,
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
}

// const filteredElements = (filter, contacts) => {
//     const normalizedFilter = filter.toLowerCase()
//     return contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//     )
// }

const mapStateToProps = (state) => ({
    filteredContacts: phonebookSelectors.getfilteredElements(state),
    resetFilter: phonebookSelectors.getFilter(state),
    contacts: phonebookSelectors.getContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
    // fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
    deleteContact: (id) => {
        dispatch(phonebookOperations.deleteContact(id))
    },
    resetFilter: () => {
        dispatch(changeFilter(''))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
