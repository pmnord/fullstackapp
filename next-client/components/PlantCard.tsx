import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  plant: Plant;
};

const PlantCard: React.FunctionComponent<Props> = ({ plant }) => {
  return (
    <Link href={`/plant/${plant.id}/${plant.slug}`} passHref>
      <a className="flex flex-col transition-all hover:scale-105">
        <Image
          className="rounded"
          width={300}
          height={400}
          src={plant.image}
          alt=""
        />
        <span className="-translate-y-12 bg-slate-100 text-center text-2xl font-bold text-black">
          {plant.name}
        </span>
      </a>
    </Link>
  );
};

export default PlantCard;
