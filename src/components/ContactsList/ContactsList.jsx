import PropTypes from 'prop-types';
import { ListOfContacts, PhoneNumber, DeleteBtn } from './ContactList.styled'

function ContactsList({ list, search, deleteContact }) {
  const filteredContact = list.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ListOfContacts>
      {filteredContact.map(({ name, number, contactID }) => (
        <ListItem
          key={contactID}
          name={name}
          number={number}
          contactID={contactID}
          deleteContact={deleteContact}
        />
      ))}
    </ListOfContacts>
  );
}

function ListItem({ name, number, contactID, deleteContact }) {
  return (
    <li>
      {name} <PhoneNumber>{number}</PhoneNumber>
      <DeleteBtn onClick={() => deleteContact(contactID)} type='button'>
        Delete
      </DeleteBtn>
    </li>
  );
}

ContactsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            contactID: PropTypes.string.isRequired,
        })
    ).isRequired,
    search: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;