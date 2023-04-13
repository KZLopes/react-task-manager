import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showForm ? 'red' : 'green'}
        text={showForm ? 'Close' : 'Add'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
