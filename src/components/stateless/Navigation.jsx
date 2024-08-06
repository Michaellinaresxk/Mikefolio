import { motion } from "framer-motion";
import { photo1 } from "../../assets/img";
import MenuItem from "./MenuItem";
import { variants_menu_items, variants_navigation } from "../../config/motion";

const Navigation = () => (
  <motion.ul
    variants={variants_navigation}
    className="p-6 absolute top-20 right-24  w-[230px] z-50"
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
    <motion.div variants={variants_menu_items}>
      <img
        src={photo1}
        className="w-[180px] h-[180px] rounded-full mt-20 border border-transparent photo-animation"
      />
    </motion.div>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3];

export default Navigation;
