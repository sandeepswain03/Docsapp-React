/* eslint-disable react/prop-types */
import Card from "./Card";

function CardsList({ reference, cards, deletecards, editCards }) {
  return (
    <>
      {cards.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          reference={reference}
          desc={item.desc}
          filesize={item.filesize}
          close={item.close}
          isOpen={item.tag.isOpen}
          tagTitle={item.tag.tagTitle}
          tagColor={item.tag.tagColor}
          deletecards={deletecards}
          editCards={editCards}
        />
      ))}
    </>
  );
}

export default CardsList;
