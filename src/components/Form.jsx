const Form = () => (
  <>
    <h1>React Form Handling</h1>
    <form>
      <label htmlFor="name">
        First Name:
        {' '}
        <input name="name" type="text" defaultValue="Enter name..." />
      </label>
    </form>
  </>
);

export default Form;
