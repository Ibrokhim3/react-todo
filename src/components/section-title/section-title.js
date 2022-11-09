import { Children } from "react";
import "./section-title.css";

export const SectionTitle = ({ children }) => {
  return <h2 className="section-title">{children}</h2>;
};
