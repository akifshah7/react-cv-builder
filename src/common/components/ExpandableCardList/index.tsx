import React, { useState } from "react";
import AccordionForm from "../AccordionForm";

type ExpandableCard = {
  id: number;
};

const ExpandableCardList: React.FC = () => {
  const [listOfCards, setListOfCards] = useState<ExpandableCard[]>([]);

  const handleAddCard = () => {
    const newCard: ExpandableCard = {
      id: listOfCards.length + 1,
    };
    setListOfCards([...listOfCards, newCard]);
  };

  return (
    <>
      {listOfCards.map((card: ExpandableCard) => (
        <AccordionForm key={card.id} />
      ))}
      <div className="border-black border-1 p-1 mx-4 hover:bg-blue-50">
        <button
          onClick={handleAddCard}
          className="w-full font-semibold text-sm flex text-text-blue gap-x-2"
        >
          <span>+</span>
          <p>Add one more employment</p>
        </button>
      </div>
    </>
  );
};

export default ExpandableCardList;
