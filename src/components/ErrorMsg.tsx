import React from "react";

interface IProps {
  msg?: string;
}

const ErrorMsg = ({msg}: IProps) => {
  return msg ? <p className='mt-0.25rem text-sm font-medium text-error'>{msg}</p> : null;
};

export default ErrorMsg;
