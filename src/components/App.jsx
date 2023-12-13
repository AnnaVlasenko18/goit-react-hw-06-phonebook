import { GlobalStyle } from './GlogalStyle';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Wrapper, Container, Title, TitleContact } from './Layout';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(filter);
    });
  };

  return (
    <Wrapper>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContact>Contacts</TitleContact>
        <Filter />
        <ContactList contact={getVisibleContacts} />
        <GlobalStyle />
      </Container>
    </Wrapper>
  );
};
