export const json = [
  {
    id: 0,
    firstName: "Luke",
    lastName: "Skywalker",
    movies: ["4", "5", "6"],
  },
  {
    id: 1,
    firstName: "C-3PO",
    lastName: "",
    movies: ["1", "2", "3", "4", "5", "6"],
  },
  {
    id: 2,
    firstName: "R2-D2",
    lastName: "",
    movies: ["1", "2", "3", "4", "5", "6"],
  },
  {
    id: 3,
    firstName: "Darth",
    lastName: "Vader",
    movies: ["1", "2", "3", "4", "5", "6"],
  },
];

export function getPeople(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, 250);
  });
}

export function createPerson(data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!data.firstName || !data.lastName) {
      reject(new Error("First and last name not there"));
    }

    setTimeout(() => resolve(true), 250);
  });
}
