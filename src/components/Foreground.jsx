import { useRef, useState } from "react";
import CardsList from "./CardsList";
import AddCards from "./AddCards";

function Foreground() {
  const data = [
    {
      id: 1,
      desc: "1 Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      id: 2,
      desc: "2 Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      id: 3,
      desc: "3 Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  const [cards, setCards] = useState(data);
  const [editableCard, setEditableCard] = useState(null);

  function addcards(newCard) {
    setCards([...cards, { ...newCard, id: cards.length + 1 }]);
  }

  function deletecards(id) {
    setCards(cards.filter((newCard) => newCard.id !== id));
  }

  function editCards(id) {
    setEditableCard(cards.find((newCard) => newCard.id === id));
  }

  function updateCard(newCard) {
    const index = cards.findIndex((c) => c.id === newCard.id);
    const newCards = [...cards];
    newCards.splice(index, 1, newCard);
    setEditableCard(null);
    setCards(newCards);
  }

  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="flex gap-10 flex-wrap fixed top-0 left-0 w-full h-screen z-[3] p-5"
    >
      <AddCards reference={ref} addcards={addcards} updateCard={updateCard} editableCard={editableCard}/>
      <CardsList reference={ref} cards={cards} deletecards={deletecards} editCards={editCards} />
    </div>
  );
}

export default Foreground;
