import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; 
}

const FuzeButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`shadow-lg rounded-lg  focus:outline-none ${className}`}
    >
      {label}
    </button>
  );
};

export default FuzeButton;
