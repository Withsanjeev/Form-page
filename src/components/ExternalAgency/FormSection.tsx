import React, { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-5">
      <div className="text-2xl font-semibold text-black mb-5">{title}</div>
      {children}
    </div>
  );
};

export default FormSection;
