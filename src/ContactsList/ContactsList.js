
const ContactItem = ({ removeContact, contacts }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button
          onClick={() => removeContact(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });
};

const ContactList = ({ removeContact, contacts }) => {
  return (
    <ul>
      <ContactItem removeContact={removeContact} contacts={contacts} />
    </ul>
  );
};


export default ContactList;