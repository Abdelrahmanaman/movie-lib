"use client";
import Image from "next/image";
import { CustomButtonProps } from "../../types";
const CustomButton = ({title, style, handleClick} : CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`${style}`}
      onClick={handleClick}
    >
      <span>
       {title}
      </span>
    </button>
  );
};

export default CustomButton;
