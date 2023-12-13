import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ContactsList>
  );
};
