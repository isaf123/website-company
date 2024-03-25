import * as React from "react";

interface IButton2Props {
  children: string;
  onClick?: any;
}

const Button2: React.FunctionComponent<IButton2Props> = (props) => {
  return (
    <div>
      <button
        className="bg-[#00A3C8] px-4 py-2 rounded-md align-center text-white text-sm hover:bg-blue-400 md:mt-6"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button2;
