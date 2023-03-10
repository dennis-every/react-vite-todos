import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
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
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="isChecked">
          <input
            name="isChecked"
            type="checkbox"
            checked={state.isChecked}
            onChange={handleChange}
          />
          {' '}
          Is Checked?
        </label>
        <br />
        <br />
        <label htmlFor="gender">
          Gender
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === 'male'}
            onChange={handleChange}
          />
          {' '}
          male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleChange}
          />
          {' '}
          female
        </label>
        <br />
        <br />
        <label htmlFor="price">
          Price:
          {' '}
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <hr />
      <br />
      <div>
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
        <br />
        <h5>
          Is it checked?:
          {' '}
          {state.isChecked ? 'Yes' : 'No'}
        </h5>
        <br />
        <h5>
          Gender:
          {' '}
          {state.gender}
        </h5>
        <br />
        <h5>
          Price:
          {' $'}
          {state.price}
        </h5>
      </div>
    </>
  );
};

export default Form;
