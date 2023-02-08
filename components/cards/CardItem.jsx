import Image from "next/image";
import React from "react";

const CardItem = ({ card }) => {
  return (
    <div className="max-w-fit mx-auto">
      <Image alt={card.name} src={`/assets/img/card/${card.img_url}`} width={200} height={200} />
    </div>
  );
};

export default CardItem;
