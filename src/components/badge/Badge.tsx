import React from "react";
import { FaCircle } from "react-icons/fa";

interface Props {
  type: string;
  label: string;
  bullet?: boolean;
}

const Badage = ({ type, label, bullet = false }: Props) => {
  if (type === "success") {
    return (
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 ">
        <FaCircle className="me-2" />
        {label}
      </span>
    );
  } else if (type === "danger") {
    return (
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 ">
        <FaCircle className="me-2" />
        {label}
      </span>
    );
  } else if (type === "warning") {
    return (
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ">
        <FaCircle className="me-2" />
        {label}
      </span>
    );
  } else if (type === "info") {
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ">
      <FaCircle className="me-2" />
      {label}
    </span>;
  } else {
    return (
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ">
        <FaCircle className="me-2" />
        {label}
      </span>
    );
  }
};

export default Badage;
