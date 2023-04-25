import { useCallback, useEffect, useState } from "react";
import { getPeople } from "../data/data";
import { z } from "zod";

const StarWarsSchema = z.array(
  z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    movies: z.array(z.string()),
  })
);

export type PersonList = z.infer<typeof StarWarsSchema>;

const fetchStarWarsPersonName = async () => {
  const data = await getPeople();
  const parsedData = StarWarsSchema.parse(data);
  return parsedData;
};

export default function NoZod() {
  const [data, setData] = useState<PersonList>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchStarWarsPersonName();
      setData(response);
    } catch (error) {
      setErrorMessage("Problem with fetched object");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8 text-3xl">
      {data.map((person) => {
        return (
          <div key={person.id}>
            <div>
              name: {person.firstName} {person.lastName}
            </div>
            <div>
              movies:{" "}
              {person.movies.map((movie) => (
                <span key={movie}>{movie}, </span>
              ))}
            </div>
          </div>
        );
      })}
      {errorMessage && (
        <div className="text-red-500 font-bold text-3xl">{errorMessage}</div>
      )}
    </div>
  );
}
