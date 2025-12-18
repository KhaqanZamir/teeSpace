import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type, variant, disabled, onClick, icon: Icon, style = "" }) => {
  
  const variants = {
    primary: 'bg-white text-black rounded-lg',
    secondary: 'bg-myGreen text-white rounded-lg',
    tertiary: 'bg-black text-white rounded-xl',
  };

  return (
    <button
      type={type} 
      className={`flex items-center justify-center gap-2 sm:mt-0 px-4 sm:px-6 py-2 text-xs sm:text-sm
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${style}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {Icon && <Icon className="ml-1 w-4.5" />}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.string,
  icon: PropTypes.elementType,
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary', 
  disabled: false,
  onClick: () => {},
  style: '',
  icon: null,
}

export default Button;