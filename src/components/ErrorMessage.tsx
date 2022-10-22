import React from "react";

interface ErrorMessageProps {
  error: string;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-center text-red-500">{error}</p>;
}

export default ErrorMessage;
