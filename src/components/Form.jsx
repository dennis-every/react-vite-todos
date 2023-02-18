import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi'];
  const carBrandOptions = carBrands.map((carBrand, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));

  return (
    <>
      <h1>Controller Form</h1>
      <form>
        <label htmlFor="fname">
          First Name:
          {' '}
          <input
            name="fname"
            type="text"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="lname">
          Last Name:
          {' '}
          <input
            name="lname"
            type="text"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="message">
          Your Message:
          {' '}
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="carBrand">
          Car brand:
          {' '}
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value={' '}>
              -- Pick a car brand --
            </option>
            {carBrandOptions}
          </select>
        </label>
        <br />
        <br />
        <hr />
        <br />
        <h5>
          Name:
          {' '}
          {state.fname}
          {' '}
          {state.lname}
        </h5>
        <br />
        <h5>
          Favorite car brand:
          {' '}
          {state.carBrand}
        </h5>
        <br />
        <p>
          Message:
          {' '}
          {state.message}
        </p>
      </form>
    </>
  );
};

export default Form;
