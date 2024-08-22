import { AnimatePresence, motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

// eslint-disable-next-line react/prop-types
const Presentation = ({ title1, title2, subtitle }) => {
  return (
    <AnimatePresence>
      <motion.section className="flex flex-col mt-20">
        <motion.div>
          <div className="text-6xl md:text-6xl lg:text-9xl font-semibold">
            {title1} <span className="text-orange-500">{title2}</span>
          </div>
          <div className="text-[20px] font-semibold md:text-xl lg:text-2xl mt-5">
            {subtitle}
          </div>
        </motion.div>
        <motion.div>
          <SocialMedia size={30} color="white" />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Presentation;
