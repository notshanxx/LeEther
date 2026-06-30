"use client";

import Link from "next/link";
import { useState } from "react";

export default function ZodiacPage() {
  const [selected, setSelected] = useState(null as "western" | "chinese" | null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">Choose Your Zodiac System</h1>

      <p className="text-base-content/60 mb-10 text-center">
        Select one to begin your personality reading
      </p>

      {/* Capsule Toggle */}
      <div className="inline-flex rounded-full border border-base-300 overflow-hidden bg-base-200">
        <button
          onClick={() => setSelected("western")}
          className={`px-6 py-2 text-sm font-medium transition ${
            selected === "western"
              ? "bg-primary text-primary-content"
              : "hover:bg-base-300"
          }`}
        >
          Western
        </button>

        <button
          onClick={() => setSelected("chinese")}
          className={`px-6 py-2 text-sm font-medium transition ${
            selected === "chinese"
              ? "bg-primary text-primary-content"
              : "hover:bg-base-300"
          }`}
        >
          Chinese
        </button>
      </div>

      {/* Result Section */}
      <div className="mt-10 text-center">
        {selected === null && (
          <p className="text-base-content/50">
            Please choose a system to continue
          </p>
        )}

        {selected === "western" && (
          <div className="card bg-base-200 shadow-md p-6">
            <h2 className="text-xl font-semibold">Western Zodiac</h2>

            <p className="text-base-content/70">
              Based on your birth date and sun position
            </p>

            <div className="grid grid-cols-4 gap-1 auto-rows-auto mt-4">
              {[
                "Aries",
                "Taurus",
                "Gemini",
                "Cancer",
                "Leo",
                "Virgo",
                "Libra",
                "Scorpio",
                "Sagittarius",
                "Capricorn",
                "Aquarius",
                "Pisces",
              ].map((zodiac) => (
                <span key={zodiac} className="badge badge-ghost w-full hover:bg-base-200 hover:scale-[1.02] cursor-pointer">
                  {zodiac}
                </span>
              ))}
            </div>

            <Link
              href="/features/zodiac/western"
              className="btn btn-primary mt-4"
            >
              Let&apos;s go!
            </Link>
          </div>
        )}

        {selected === "chinese" && (
          <div className="card bg-base-200 shadow-md p-6">
            <h2 className="text-xl font-semibold">Chinese Zodiac</h2>
            <p className="text-base-content/70">
              Based on your birth year and lunar cycle
            </p>
            <div className="grid grid-cols-4 gap-1 auto-rows-auto mt-4">
              {[
                "Rat",
                "Ox",
                "Tiger",
                "Rabbit",
                "Dragon",
                "Snake",
                "Horse",
                "Goat",
                "Monkey",
                "Rooster",
                "Dog",
                "Pig",
              ].map((zodiac) => (
                <span key={zodiac} className="badge badge-ghost w-full hover:bg-base-200 hover:scale-[1.02] cursor-pointer">
                  {zodiac}
                </span>
              ))}
            </div>
            <Link
              href="/features/zodiac/chinese"
              className="btn btn-primary mt-4"
            >
              Lets go!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
