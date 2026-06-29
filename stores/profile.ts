import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Profile {
  name: string;
  nickname: string;
  title: string;
  bio: string;
  avatar: string;
  birthday?: string;
  location?: string;
  sex?: string;
}

interface ProfileStore {
  profile: Profile;

  updateProfile: (data: Partial<Profile>) => void;
  resetProfile: () => void;
}

const defaultProfile: Profile = {
  name: "Guest",
  nickname: "the great destroyer 123",
  title: "A Student",
  bio: "Don't Stop Believin'",
  avatar: "",
  birthday: "2005-01-01", // YYYY-MM-DD
  location: "Germany",
  sex: "Male"
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: defaultProfile,

      updateProfile: (data) =>
        set((state) => ({
          profile: {
            ...state.profile,
            ...data,
          },
        })),

      resetProfile: () =>
        set({
          profile: defaultProfile,
        }),
    }),
    {
      name: "user-profile",
    },
  ),
);
