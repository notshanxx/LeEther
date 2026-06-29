import Link from "next/link";
import { ReactNode } from "react";

interface Card3DProps {
  href?: string;
  children: ReactNode;
}

export default function Card3D({
  href = "#",
  children,
}: Card3DProps) {
  return (
    <div className="lg:hover-3d my-12 mx-2 cursor-pointer w-full max-w-lg">
      {/* content */}
      <div className="card w-full border-1">
        <div className="card-body">
          {children}
        </div>
      </div>

      {/* 8 empty divs needed for the 3D effect */}
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}