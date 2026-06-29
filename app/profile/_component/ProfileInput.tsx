"use client";

import { useState } from "react";
import { useProfileStore } from "@/stores/profile";
import Image from "next/image";

export default function ProfileForm({ onSave }: { onSave: () => void }) {
  const { profile, updateProfile } = useProfileStore();

  const [form, setForm] = useState(profile);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setForm((prev) => ({
        ...prev,
        avatar: reader.result as string,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    updateProfile(form);
    onSave();
  };

  return (
    <div className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="input input-bordered w-full"
      />

      <input
        name="nickname"
        value={form.nickname}
        onChange={handleChange}
        placeholder="Nickname"
        className="input input-bordered w-full"
      />

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="input input-bordered w-full"
      />

      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        placeholder="Bio"
        className="textarea textarea-bordered w-full"
      />

      {/* Avatar upload */}
      <div className="space-y-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="file-input file-input-bordered w-full"
        />

        {form.avatar && (
          <div className="relative inline-block">
            <Image
              src={form.avatar}
              alt="Avatar preview"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover"
            />

            {/* delete btn */}

            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  avatar: "",
                }))
              }
              className=" btn btn-circle btn-xs absolute -top-1 -right-1 shadow"
              aria-label="Delete avatar"
            >
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
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <input
        type="date"
        name="birthday"
        value={form.birthday}
        onChange={handleChange}
        className="input input-bordered w-full"
      />

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        className="input input-bordered w-full"
      />

      <select
        name="sex"
        value={form.sex}
        onChange={handleChange}
        className="select select-bordered w-full"
      >
        <option value="">Select sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <button onClick={handleSave} className="btn btn-primary w-full">
        Save Profile
      </button>
    </div>
  );
}
