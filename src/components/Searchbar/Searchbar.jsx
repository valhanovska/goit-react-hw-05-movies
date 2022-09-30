import { useState } from 'react';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.btnlabel}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          autocomplete="off"
          autofocus
          placeholder="Search movies"
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Search
        {/* <MyIcon /> */}
      </button>
    </form>
  );
};

export default Searchbar;
