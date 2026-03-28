import React from "react";
import ContactForm from "./components/ContactForm";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center">
      <ContactForm />
      <ToastContainer />
    </div>
  );
};

export default App;
