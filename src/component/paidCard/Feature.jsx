import { CircleCheckBig } from "lucide-react";
import React from "react";

const Feature = ({ feature }) => {
//   console.log(feature);
  return <p className="flex gap-1 items-center mt-3"><CircleCheckBig size={15} />{feature}</p>;
};

export default Feature; 
