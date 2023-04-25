import { useState } from "react";
import { createPerson } from "../data/data";
import { ZodFormattedError, z } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1, { message: "Last name required" }),
  email: z.string().email(),
  phoneNumber: z.string().min(5).max(20).optional(),
});

type PersonDetails = z.infer<typeof FormSchema>;

export default function ParseFormZod() {
  const [zodError, setZodError] = useState<ZodFormattedError<PersonDetails>>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setZodError(undefined);

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    // parse form before sending to server
    const result = FormSchema.safeParse(formObject);
    if (!result.success) {
      setZodError(result.error.format());
      console.log(result.error.format());
      return;
    }

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
        <input type="text" name="firstName" />
        {zodError?.firstName && (
          <div className="text-red-500 font-bold">
            {zodError.firstName._errors.map((error) => error)}
          </div>
        )}
      </section>

      <section className="flex gap-2">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" />
        {zodError?.lastName && (
          <div className="text-red-500 font-bold">
            {zodError.lastName._errors.map((error) => error)}
          </div>
        )}
      </section>

      <section className="flex gap-2">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        {zodError?.email && (
          <div className="text-red-500 font-bold">
            {zodError.email._errors.map((error) => error)}
          </div>
        )}
      </section>

      <section className="flex gap-2">
        <label htmlFor="phone">Phone #:</label>
        <input type="text" name="phone" />
        {zodError?.phoneNumber && (
          <div className="text-red-500 font-bold">
            {zodError.phoneNumber._errors.map((error) => error)}
          </div>
        )}
      </section>

      <button className="bg-blue-500 text-white rounded p-2 w-32">
        Submit
      </button>
      {errorMessage && (
        <div className="text-red-500 font-bold">{errorMessage}</div>
      )}
    </form>
  );
}
