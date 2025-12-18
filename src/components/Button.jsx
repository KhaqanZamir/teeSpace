// const Button = ({ label, className = "", ...props }) => {
//   return (
//     <button
//       {...props}
//       className={`
//         font-bold px-6 py-2 rounded-lg text-sm
//         transition-all duration-200
//         ${className}
//       `}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type, variant, disabled, onClick, style = "" }) => {
  
  const variants = {
    primary: 'bg-white text-black',
    secondary: 'bg-green-500 text-white hover:bg-green-600',
  };

  return (
    <button
      type={type} 
      className={`rounded-lg
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${style}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary', 
  disabled: false,
  onClick: () => {},
  style: '',
}

export default Button;