import React from 'react';

type Props = {
  img: string;
  name: string;
  role: string;
};

export default function TeamCard({ img, name, role }: Props) {
  return (
    <div className="w-full h-full">
      <figure className="w-full aspect-square overflow-hidden relative">
        <img src={img} alt={name} className="w-full h-full object-cover absolute" />
      </figure>
      <p className="text-lg mt-2 mb-1">{name}</p>
      <span className="font-bold">{role}</span>
    </div>
  );
}
