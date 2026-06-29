export type SzondiItem = {
  id: number;
  title: string;
  info: string;
  repression: string;
  denies: string;
  sublimation: string;
};

// get all data
export const getAll = (data: SzondiItem[]) => {
  return data;
};

// get single item by id
export const getById = (data: SzondiItem[], id: number) => {
  return data.find((item) => item.id === id) || null;
};