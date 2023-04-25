import { useCallback, useEffect, useState } from "react";
import { getPeople } from "../data/data";

export interface DataObject {
  firstName: string;
  lastName: string;
  movies: string[];
  id: number;
}

const fetchStarWarsPersonName = async () => {
  const data = await getPeople();
  return data;
};

export default function NoZod() {
  const [data, setData] = useState<DataObject[]>([]);

  const fetchData = useCallback(async () => {
    const response = await fetchStarWarsPersonName();
    setData(response);
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
    </div>
  );
}
