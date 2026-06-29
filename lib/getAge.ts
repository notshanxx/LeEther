export function getAge(birthday: string) {
  const birth = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthday) age--;

  return age;
}