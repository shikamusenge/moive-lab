import React, { ReactNode, useRef } from "react";
import { type cars } from "../lib/types";
type user = {
  sessionId?: string;
  username?: string;
  children?: React.ReactNode;
  styles: React.CSSProperties;
};
type guest = Omit<user, "username">;
const Button = ({ children, ...rest }: user) => {
  const converToArray = <T,>(data: T): [T] => {
    return [data];
  };
  converToArray(rest);
  return (
    <div>
      {children}
      {}
      <div style={rest.styles}></div>
    </div>
  );
};

export default Button;
