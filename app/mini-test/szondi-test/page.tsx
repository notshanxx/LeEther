"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/app/_components/Modal";
import data from "@/data/szondi/szondi.json";
import { getAll, getById, SzondiItem } from "@/lib/szondi-helper";

export default function SzondiTestPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SzondiItem | null>(null);
  const items = getAll(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <h1 className="text-4xl font-bold">Szondi Test </h1>
      <p className="text-center mb-4 text-lg ">
        Choose the image that evokes the strongest feeling of discomfort. Then
        select the number below it.
      </p>
      
      <Image src="/szondi.jpg" alt="Szondi Test" width={400} height={300} className="rounded-lg" />
      <div className="grid grid-cols-4 gap-2 p-4">
        {items.map((item) => (
          <button
            key={item.id}
            className="btn btn-neutral btn-outline"
            onClick={() => {
              const result = getById(data, item.id);
              setSelected(result);
              setOpen(true);
            }}
          >
            {item.id}
          </button>
        ))}
      </div>
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={selected?.title || "Hello!"}
        >
          {selected && (
            <div className="space-y-3">
              <p>{selected.info}</p>

              <div>
                <strong>Repression:</strong> {selected.repression}
              </div>

              <div>
                <strong>Denies:</strong> {selected.denies}
              </div>

              <div>
                <strong>Sublimation:</strong> {selected.sublimation}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
