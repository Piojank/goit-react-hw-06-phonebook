import ContactList from './PhonebookList/PhonebookList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}