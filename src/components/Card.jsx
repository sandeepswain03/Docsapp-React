/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
import Download from "./Download";

function Card({
  desc,
  close,
  filesize,
  isOpen,
  tagColor,
  tagTitle,
  reference,
  deletecards,
  id,
  editCards,
}) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden"
      >
        <div className="flex justify-between items-center ">
          <button onClick={() => editCards(id)}>
            <FaRegFileAlt />
          </button>
          <button
            onClick={() => deletecards(id)}
            className=" flex justify-center items-center w-7 h-7 bg-zinc-600 rounded-full cursor-pointer"
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
        <p className="text-sm mt-5 font-semibold leading-tight ">{desc}</p>
        <Download
          close={close}
          filesize={filesize}
          isOpen={isOpen}
          tagColor={tagColor}
          tagTitle={tagTitle}
        />
      </motion.div>
    </>
  );
}

export default Card;
