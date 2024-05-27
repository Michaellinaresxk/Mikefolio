/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variants_menu_items } from "../../config/motion";
import { routes } from "../../config/constans";
import { links } from "../../config/constans";

const MenuItem = ({ i }) => {
  return (
    <motion.li
      className="m-0 p-0 list-none mb-10 flex items-center justify-center mt-8 cursor-pointer"
      variants={variants_menu_items}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={routes[i]}>
        <span className="w-[200px] h-[20px] text-4xl ml-2 hover:text-orange-500">
          {links[i]}
        </span>
      </Link>
    </motion.li>
  );
};
export default MenuItem;
