"use client";
import { useRef } from "react";

interface FormProps {
  children: React.ReactNode;
  action?: (formData: FormData) => Promise<void>; // Optional async action handler
  className?: string; // Optional class name for styling
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void; // Optional submit handler
}

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (onSubmit) {
      onSubmit(e); // Call the provided onSubmit handler if it exists
    }

    if (action && formRef.current) {
      const formData = new FormData(formRef.current); // Extract form data
      await action(formData); // Call the async action handler
      formRef.current.reset(); // Reset the form after submission
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
