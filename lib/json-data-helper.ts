
export function getAll(data: any[]) {
  return data;
}

export function getById(data: any[], id: string) {
  return data.find((item) => item.id === id);
}