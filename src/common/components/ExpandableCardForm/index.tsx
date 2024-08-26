import React, { useState } from "react";

type ExpandableCard = {
    id: number;
}

const ExpandableCardForm: React.FC = () => {
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
        <div className="mx-4 h-16 card rounded-md border-[1px] border-gray-300" key={card.id}>
        </div>
      ))}
      <div className="border-black border-1 p-2 mx-4">
        <button onClick={handleAddCard} className="w-full font-semibold text-sm flex text-text-blue gap-x-2">
          <span>+</span>
          <p>Add Employment</p>
        </button>
      </div>

    </>
  );
};

export default ExpandableCardForm;
