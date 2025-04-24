import React, { useState } from "react";
import FormSection from "./FormSection";
import FormInput from "./FormInput";
import DateInput from "./DateInput";
import FileUpload from "./FileUpload";

const ExternalAgencyForm: React.FC = () => {
  const [formState, setFormState] = useState({
    projectName: "",
    projectDescription: "",
    aboutProgram: "",
    identificationNo: "",
    selectedContractor: "",
    description: "",
    remarks: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormState({
      projectName: "",
      projectDescription: "",
      aboutProgram: "",
      identificationNo: "",
      selectedContractor: "",
      description: "",
      remarks: "",
    });
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formState);
    alert("Form submitted successfully!");
  };

  const handleFileSelect = (files: FileList) => {
    console.log("Files selected:", files);
  };

  return (
    <form className="box-border bg-[#F7F8FA] px-[79px] py-[70px] max-md:px-10 max-md:py-[50px] max-sm:px-5 max-sm:py-[30px]">
      <div className="border border-gray-300 box-border bg-[#F6FAFE] p-7 rounded-[10px] border-solid">
        <FormSection title="Project description">
          <FormInput
            label="Project Name"
            value={formState.projectName}
            onChange={(value) => handleInputChange("projectName", value)}
            characterLimit={100}
          />
          <FormInput
            label="One line description about Project"
            value={formState.projectDescription}
            onChange={(value) => handleInputChange("projectDescription", value)}
            characterLimit={200}
          />
        </FormSection>

        <FormSection title="Important Information">
          <FormInput
            label="About Program"
            value={formState.aboutProgram}
            onChange={(value) => handleInputChange("aboutProgram", value)}
          />
          <DateInput label="Started Date" />
          <DateInput label="Deadline Date" />
          <FormInput
            label="Identification No"
            value={formState.identificationNo}
            onChange={(value) => handleInputChange("identificationNo", value)}
          />
          <FormInput
            label="Selected Contractor:"
            value={formState.selectedContractor}
            onChange={(value) => handleInputChange("selectedContractor", value)}
          />
        </FormSection>

        <FormSection title="Description">
          <FormInput
            label="Description"
            value={formState.description}
            onChange={(value) => handleInputChange("description", value)}
            characterLimit={600}
          />
        </FormSection>

        <FormSection title="Upload Required Document">
          <FileUpload onFileSelect={handleFileSelect} />
        </FormSection>
      </div>

      <div className="mt-10">
        <FormSection title="Remarks">
          <FormInput
            label="Remarks"
            value={formState.remarks}
            onChange={(value) => handleInputChange("remarks", value)}
            characterLimit={400}
          />
        </FormSection>
      </div>

      <div className="flex justify-end mt-10 max-md:flex-col max-md:items-end max-sm:flex-col max-sm:items-end">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center justify-center w-[145px] h-[57px] text-lg font-medium cursor-pointer border text-slate-900 bg-white ml-5 rounded-[10px] border-solid border-[#6E7E92] max-md:mt-2.5 max-sm:mt-2.5"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center justify-center w-[145px] h-[57px] text-lg font-medium cursor-pointer border text-white bg-slate-900 ml-5 rounded-[10px] border-solid border-[#6E7E92] max-md:mt-2.5 max-sm:mt-2.5"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExternalAgencyForm;
