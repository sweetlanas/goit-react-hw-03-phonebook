import React from "react";
import s from "../PhoneBookForm/PhoneBookForm.module.css";

const PhonebookFilter = ({ onSetFilter, filterValue }) => (
  <>
    <label>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        name="filter"
        onInput={onSetFilter}
        type="text"
        value={filterValue}
      />
    </label>
  </>
);

export default PhonebookFilter;
