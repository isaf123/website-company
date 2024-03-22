import * as React from "react";

interface IButton1Props {
  children: string;
}

const ButtonGray: React.FunctionComponent<IButton1Props> = (props) => {
  return (
    <div>
      <button className="border-2 border-gray-400 font-medium text-xs px-4 py-1 rounded-lg ">
        {props.children}
      </button>
    </div>
  );
};

export default ButtonGray;
