import { useState } from 'react';

const Form = () => {
  const [fname, setFname] = useState('');

  const handleChange = (e) => {
    setFname(e.target.value);
  };

  return (
    <>
      <h1>Controller Form</h1>
      <form>
        <label htmlFor="name">
          First Name:
          {' '}
          <input
            name="name"
            type="text"
            value={fname}
            onChange={handleChange}
          />
        </label>
        <h5>
          First name:
          {' '}
          {fname}
        </h5>
      </form>
    </>
  );
};

export default Form;
