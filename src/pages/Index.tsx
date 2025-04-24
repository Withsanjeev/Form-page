import React from "react";
import Header from "../components/ExternalAgency/Header";
import ExternalAgencyForm from "../components/ExternalAgency/ExternalAgencyForm";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full bg-white mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <ExternalAgencyForm />
      </div>
    </>
  );
};

export default Index;
