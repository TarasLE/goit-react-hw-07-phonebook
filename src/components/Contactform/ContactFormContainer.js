// import { connect } from 'react-redux'
// import phonebookOperations from '../../redux/phonebook/phonebook-operations'
// import ContactForm from './ContactForm'
// checkContact = () => {
//     if (this.props.contacts.length == 0) {
//         return
//     } else if (
//         this.props.contacts.find((contact) => {
//             return (
//                 contact.name.toLowerCase() === this.state.name.toLowerCase() &&
//                 contact.number.toLowerCase() === this.state.number.toLowerCase()
//             )
//         })
//     ) {
//         this.setState({ alert: true })
//         this.alertState()
//         return true
//     }
// }

// handleContact = (event) => {
//     const { name, value } = event.currentTarget
//     this.setState({
//         [name]: value,
//     })
// }

// clearInput = () => {
//     this.setState({ name: '', number: '' })
// }

// alertState = () => {
//     setTimeout(() => {
//         this.setState({ alert: false })
//     }, 2000)
// }

// handleSubmit = (event) => {
//     event.preventDefault()
//     if (this.checkContact()) {
//         return
//     } else {
//         const contact = {
//             id: shortid.generate(),
//             name: this.state.name,
//             number: this.state.number,
//         }
//         this.props.addContact(contact)
//         this.clearInput()
//     }
// }

// const mapStateToProps = (state) => ({
//     contacts: state.contacts.items,
// })
// const mapDispatchToProps = (dispatch) => ({
//     addContact: (contact) => dispatch(phonebookOperations.addContact(contact)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
