import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";

const PhoneBookList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            onDeleteContact={onDeleteContact}
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default PhoneBookList;
