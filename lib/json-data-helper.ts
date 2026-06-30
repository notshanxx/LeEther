
export function getAll<T>(data: T[]): T[] {
  return data;
}

export function getById<T extends { id: string }>(
  data: T[],
  id: string
): T | undefined {
  return data.find((item) => item.id === id);
}