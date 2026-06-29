"use client";
import Image from "next/image";
import Card3D from "../_components/Card3D";
import Modal from "../_components/Modal";

import { useProfileStore } from "@/stores/profile";

import { useState } from "react";
import { getAge } from "@/lib/getAge";
import ProfileForm from "./_component/ProfileInput";
import DynamicImage from "../_components/DynamicImage";
import { getChineseZodiac, getWesternZodiac } from "@/lib/compute-zodiac";

export default function ProfilePage() {
  // user datas
  const profile = useProfileStore((state) => state.profile);
  const chineseZodiac = profile.birthday
    ? getChineseZodiac(profile.birthday)
    : null;
  const westernZodiac = profile.birthday
    ? getWesternZodiac(profile.birthday || "")
    : null;

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card3D>
        <div className="flex items-center w-full ">
          {/* info */}
          <div className="flex flex-col grow gap-4 ">
            <div className="flex  items-center gap-4">
              <div className="flex flex-col grow">
                <h2 className="text-2xl font-semibold ">{profile.name}</h2>
                <div className="divider m-0 p-0"></div>
                <p className="text-lg ">{profile.title}</p>
                <p>{profile.bio}</p>
              </div>

              {/* image */}
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <Image
                    src={profile.avatar || "/profile.jpg"} 
                    alt="Profile"
                    width={100}
                    height={100}
                    className="rounded-full size-24 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs grid grid-cols-2 gap-2">
                <p>
                  <span className="font-bold">Nickname:</span>{" "}
                  {profile.nickname}
                </p>
                <p>
                  <span className="font-bold">Birthday:</span>{" "}
                  {profile.birthday}
                </p>
                <p>
                  <span className="font-bold">Location:</span>{" "}
                  {profile.location}
                </p>
                <p>
                  <span className="font-bold">Age:</span>{" "}
                  {getAge(profile.birthday || "")}
                </p>
                {/* <p>
                  <span className="font-bold">MBTI:</span> ENFJ
                </p> */}
                <p>
                  <span className="font-bold">Sex:</span> {profile.sex}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {/* <span className="badge badge-primary  badge-dash py-4">
                <Image src="/mbti/ENFJ.svg" alt="MBTI" width={24} height={24} />
                INTP
              </span> */}
              {chineseZodiac && (
                <span className="badge badge-primary badge-dash py-4">
                  <DynamicImage
                    src={`/zodiacs/chinese/${chineseZodiac.toLowerCase()}.svg`}
                    alt="Chinese Zodiac"
                  />
                  {chineseZodiac}
                </span>
              )}
              {westernZodiac && (
                <span className="badge badge-primary badge-dash py-4">
                  <DynamicImage
                    src={`/zodiacs/western/${westernZodiac.toLowerCase()}.svg`}
                    alt="Western Zodiac"
                  />
                  {westernZodiac}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card3D>
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        Edit Profile
      </button>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          title="Edit Profile"
          onClose={() => setIsModalOpen(false)}
        >
          <ProfileForm onSave={() => setIsModalOpen(false)} />
        </Modal>
      )}

      {/* <h1 className="text-4xl font-bold">Profile Page</h1>
        <p className="mt-4 text-lg text-gray-600">
            This is the profile page of the application.
        </p> */}
    </div>
  );
}
