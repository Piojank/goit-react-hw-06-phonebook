import PropTypes from 'prop-types';
import style from './IconButton.module.css';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button className={style.ButtonIcon} type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
