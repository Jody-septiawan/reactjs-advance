// import css modules
import cssModules from './Form.module.css';

import img from '../assets/img.jpeg';

const styles = {
  form: {
    margin: '16px 20% 0',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
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
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#212529',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
  },
};

function Form() {
  return (
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            style={styles.formInput}
          />
        </div>
        {/* code here */}
        <div className={cssModules.formGroup}>
          <label className={cssModules.formLabel} htmlFor="email">
            Email
          </label>
          <input
            className={cssModules.formInput}
            id="email"
            placeholder="Input email"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
