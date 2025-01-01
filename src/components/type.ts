type Color = "red" | "blue" | "green" | "yellow" | "black" | "white";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; 
  color?: Color;
  textColor?: Color;
  radius: "small" | "medium" | "large" | "extra-large" | "round";
  size?: "small" | "medium" | "large" | "extra-large";
  border?: "solid" | "dashed" | "dotted" | "none";
  borderColor?: Color;
  borderWidth?: "1" | "2" | "4" | "8";
  mixColor?: { color1: Color; color2: Color };  
  isLoading?: false;
  shadow?: "small" | "medium" | "large" | "extra-large";
  animate?: false;
}


export interface FieldProps {
    type: "text" | "email" | "password" | "number";
    value?: string;
    onChange: () => void;
    hintText?:string
    className?: string; 
    color?: Color;
    textColor?: Color;
    radius: "small" | "medium" | "large" | "extra-large" | "round";
    size?: "small" | "medium" | "large" | "extra-large";
    border?: "solid" | "dashed" | "dotted" | "none";
    borderColor?: Color;
    borderWidth?: "1" | "2" | "4" | "8";
    mixColor?: { color1: Color; color2: Color };  
    isLoading?: false;
    shadow?: "small" | "medium" | "large" | "extra-large";
    animate?: false;
}