import * as React from "react";

interface ILogoTextProps {}

const LogoText: React.FunctionComponent<ILogoTextProps> = (props) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-10">
        <img src="logo-pic.png" alt="" />
      </div>
      <p className="text-xl">
        {" "}
        <span className="font-bold">Med</span> Hospital
      </p>
    </div>
  );
};

export default LogoText;
