import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  return (
    <ContactsList>
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ContactsList>
  );
};
