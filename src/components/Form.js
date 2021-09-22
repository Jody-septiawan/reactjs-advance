// create style here
const style = {
  form: {
    margin: '16px 20%',
  },
  formGroup: {
    marginBottom: '16px',
  },
  formLabel: {
    marginBottom: '8px',
    display: 'inline-block',
  },
  formInput: {
    display: 'block',
    width: '100%',
    fontSize: '1rem',
    color: '#212529',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    padding: '5px',
  },
};

// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <form style={style.form}>
        <div style={style.formGroup}>
          <label style={style.formLabel} htmlFor="username">
            Username
          </label>
          <input
            style={style.formInput}
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
