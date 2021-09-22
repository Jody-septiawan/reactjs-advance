// import package for property types
import PropTypes from 'prop-types';

// create component here
const DetailAbout = (props) => {
  return (
    <>
      <h1>title: {props.title}</h1>
      <p>Summary: {props.summary}</p>
      <p>Total guest: {typeof props.total}</p>
    </>
  );
};

DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  total: PropTypes.number,
};

// DetailAbout.defaultProps = {
//   title: 'Title is undefined',
// };

export default DetailAbout;

// define property type for this component here
