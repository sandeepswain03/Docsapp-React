/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const intialState = {
  desc: "",
  filesize: "",
  close: true,
  tag: {
    isOpen: true,
    tagTitle: "Download Now",
    tagColor: "green",
  },
};

function AddCards({ reference, addcards, updateCard, editableCard }) {
  const [AddCards, setAddCards] = useState(intialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (AddCards.desc.trim() === "" || AddCards.filesize.trim() === "") {
      return;
    } else if (editableCard) {
      updateCard(AddCards);
    } else {
      addcards(AddCards);
    }

    setAddCards(intialState);
  }

  function handleChange(e) {
    setAddCards({ ...AddCards, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableCard) {
      setAddCards(editableCard);
    }
  }, [editableCard]);

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative w-72 h-60 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 flex-shrink-0"
    >
      <form className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          value={AddCards.desc}
          name="desc"
          className="block p-2 mb-5 rounded-[45px] text-white bg-zinc-800 font-semibold"
        />
        <input
          type="text"
          placeholder="fileSize"
          onChange={handleChange}
          value={AddCards.filesize}
          name="filesize"
          className="block p-2 mb-5 rounded-[45px] text-white bg-zinc-800 font-semibold"
        />
        <button className="p-2 rounded-3xl bg-blue-600 " onClick={handleSubmit}>
          {editableCard ? "Edit" : "Add"} Docs.
        </button>
      </form>
    </motion.div>
  );
}

export default AddCards;
