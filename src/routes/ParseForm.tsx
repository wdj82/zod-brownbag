import { useState } from "react";
import { createPerson } from "../data/data";

export default function ParseForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      await createPerson(formObject);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-3xl">
      <section className="flex gap-2">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" className="w-52" />
      </section>

      <section className="flex gap-2">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" className="w-52" />
      </section>

      <section className="flex gap-2">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" className="w-52" />
      </section>

      <section className="flex gap-2">
        <label htmlFor="phone">Phone #:</label>
        <input type="text" name="phone" className="w-52" />
      </section>

      <button className="bg-blue-500 text-white rounded p-2 w-32">
        Submit
      </button>
      {errorMessage && (
        <div className="text-red-500 font-bold">
          Server Error: {errorMessage}
        </div>
      )}
    </form>
  );
}
