import React from 'react';
import loaderIcon from './assets/loader.svg';

type Color = "red" | "blue" | "green" | "yellow";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; 
  color?: Color;
  radius: "small" | "medium" | "large" | "extra-large";
  size?: "small" | "medium" | "large" | "extra-large";
  border?: "solid" | "dashed" | "dotted" | "none";
  borderColor?:"red" | "blue" | "green" | "yellow";
  borderWidth?: "1" | "2" | "4" | "8";
  mixColor?: { color1: Color; color2: Color };  
  isLoading?:false;
}

const FuzeButton: React.FC<ButtonProps> = ({ label, onClick, className, color, radius, size, border, borderColor, borderWidth, mixColor, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className={`
      text-white
      ${color?
        color=='red'? 'bg-red-500':
        color=='blue'? 'bg-blue-500':
        color=='green'? 'bg-green-500':
        'bg-yellow-500':
        ''
      } 
      ${radius?
        radius=='small'? 'rounded-sm':
        radius=='medium'? 'rounded-md'
        :radius=='large'? 'rounded-lg':
        'rounded-xl':
        ''
      }
      ${size?
        size === 'small' ? 'w-24 h-8 text-sm' :
        size === 'medium' ? 'w-32 h-10 text-base' :
        size === 'large' ? 'w-48 h-12 text-lg' :
        'w-72 h-14 text-xl' :
        ''
      }
      ${border?
      border === 'solid' ? 'border-solid' :
      border === 'dashed' ? 'border-dashed' :
      border === 'dotted' ? 'border-dotted' :
      'border-none' : 
      ''
      }
      ${borderColor?
        borderColor=='red'? 'border-red-500':
        borderColor=='blue'? 'border-blue-500':
        borderColor=='green'? 'border-green-500':
        'border-yellow-500':
        ''
      }
      ${borderWidth?
        borderWidth === '1' ? 'border-1' :
        borderWidth === '2' ? 'border-2' :
        borderWidth === '4' ? 'border-4' :
        'border-8' : 
        ''
        }
        ${mixColor ? 
          mixColor.color1 === 'red' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-red-500 to-blue-500' :
          mixColor.color1 === 'red' && mixColor.color2 === 'green' ? 'bg-gradient-to-r from-red-500 to-green-500' :
          mixColor.color1 === 'red' && mixColor.color2 === 'yellow' ? 'bg-gradient-to-r from-red-500 to-yellow-500' :
          mixColor.color1 === 'blue' && mixColor.color2 === 'green' ? 'bg-gradient-to-r from-blue-500 to-green-500' :
          mixColor.color1 === 'blue' && mixColor.color2 === 'yellow' ? 'bg-gradient-to-r from-blue-500 to-yellow-500' :
          mixColor.color1 === 'green' && mixColor.color2 === 'yellow' ? 'bg-gradient-to-r from-green-500 to-yellow-500' :
          // Add reverse combinations to cover both directions of gradients
          mixColor.color1 === 'blue' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-blue-500 to-red-500' :
          mixColor.color1 === 'green' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-green-500 to-red-500' :
          mixColor.color1 === 'yellow' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-yellow-500 to-red-500' :
          mixColor.color1 === 'green' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-green-500 to-blue-500' :
          mixColor.color1 === 'yellow' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-yellow-500 to-blue-500' :
          mixColor.color1 === 'yellow' && mixColor.color2 === 'green' ? 'bg-gradient-to-r from-yellow-500 to-green-500' :
          '' : ''
        }
      ${className}`
    }
    >
        <div className="relative flex w-full">
          <div className={`absolute left-0 ${size=='small'?'ml-2':'ml-3'}`}>
            {isLoading && (<img src={loaderIcon} width={size=='small'?16:20}/>)}
          </div>
          <div className={`w-full text-center ${size?'pl-2':''} `}>{label}</div>
        </div>
    
    </button>
  );
};

export default FuzeButton;
