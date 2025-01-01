import React from "react";
import { FieldProps } from "../type";


const FuzeField: React.FC<FieldProps> = ({ type, value, onChange, hintText,  className, color, textColor, radius, size, border, borderColor, borderWidth, mixColor, isLoading, shadow, animate }) => {
    return (
      <input
        type={type}
        onChange={onChange}
        className={`
        outline-none
        pl-2
        ${color?
          color=='black'?'bg-black':
          color=='white'?'bg-white':
          color=='red'? 'bg-red-500':
          color=='blue'? 'bg-blue-500':
          color=='green'? 'bg-green-500':
          'bg-yellow-500':
          ''
        } 
        ${textColor?
          textColor=='black'?'text-black':
          textColor=='white'?'text-white':
          textColor=='red'? 'text-red-500':
          textColor=='blue'? 'text-blue-500':
          textColor=='green'? 'text-green-500':
          'text-yellow-500':
          ''
        } 
        ${radius?
          radius=="round"?'rounded-full':
          radius=='small'? 'rounded-sm':
          radius=='medium'? 'rounded-md'
          :radius=='large'? 'rounded-lg':
          'rounded-xl':
          ''
        }
        ${size?
          size === 'small' ? 'w-36 h-8 text-sm' :
          size === 'medium' ? 'w-42 h-10 text-base' :
          size === 'large' ? 'w-56 h-12 text-lg' :
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
          borderColor=='white'?'border-white':
          borderColor=='black'?'border-black':
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
            mixColor.color1 === 'blue' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-blue-500 to-red-500' :
            mixColor.color1 === 'green' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-green-500 to-red-500' :
            mixColor.color1 === 'yellow' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-yellow-500 to-red-500' :
            mixColor.color1 === 'green' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-green-500 to-blue-500' :
            mixColor.color1 === 'yellow' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-yellow-500 to-blue-500' :
            mixColor.color1 === 'yellow' && mixColor.color2 === 'green' ? 'bg-gradient-to-r from-yellow-500 to-green-500' :
            mixColor.color1 === 'white' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-white to-red-500' :
            mixColor.color1 === 'white' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-white to-blue-500' :
            mixColor.color1 === 'white' && mixColor.color2 === 'green' ? 'bg-gradient-to-r from-white to-green-500' :
            mixColor.color1 === 'white' && mixColor.color2 === 'yellow' ? 'bg-gradient-to-r from-white to-yellow-500' :
            mixColor.color1 === 'black' && mixColor.color2 === 'red' ? 'bg-gradient-to-r from-black to-red-500' :
            mixColor.color1 === 'black' && mixColor.color2 === 'blue' ? 'bg-gradient-to-r from-black to-blue-500' :
            mixColor.color1 === 'black' && mixColor.color2 === 'green' ? 'bg-gradient-to-r from-black to-green-500' :
            mixColor.color1 === 'black' && mixColor.color2 === 'yellow' ? 'bg-gradient-to-r from-black to-yellow-500' :
            mixColor.color1 === 'red' && mixColor.color2 === 'white' ? 'bg-gradient-to-r from-red-500 to-white' :
            mixColor.color1 === 'blue' && mixColor.color2 === 'white' ? 'bg-gradient-to-r from-blue-500 to-white' :
            mixColor.color1 === 'green' && mixColor.color2 === 'white' ? 'bg-gradient-to-r from-green-500 to-white' :
            mixColor.color1 === 'yellow' && mixColor.color2 === 'white' ? 'bg-gradient-to-r from-yellow-500 to-white' :
            mixColor.color1 === 'red' && mixColor.color2 === 'black' ? 'bg-gradient-to-r from-red-500 to-black' :
            mixColor.color1 === 'blue' && mixColor.color2 === 'black' ? 'bg-gradient-to-r from-blue-500 to-black' :
            mixColor.color1 === 'green' && mixColor.color2 === 'black' ? 'bg-gradient-to-r from-green-500 to-black' :
            mixColor.color1 === 'yellow' && mixColor.color2 === 'black' ? 'bg-gradient-to-r from-yellow-500 to-black' :           
            '' : ''
          }
          ${shadow?
            shadow==="small"?'shadow-sm':
            shadow==="medium"?'shadow-md':
            shadow==="large"?'shadow-lg':
            'shadow-xl':
            ''
          }
        
        ${className}`
      }
      />
    );
  };
  
  export default FuzeField;