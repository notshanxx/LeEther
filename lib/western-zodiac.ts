import zodiacs from "@/data/western-zodiac.json";

export function getZodiac(id: string){
  return zodiacs.find((z) => z.id === id);
}

export function getAllZodiacs(){
  return zodiacs;
}
