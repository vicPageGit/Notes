import styles from "./thumbnail.module.css";
import { HiDownload } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { handleDownloadImage } from "../../functions/main-functions";

const ThumbnailImage = (props) => {
  const { setIndex = () => {}, setIsOpen = () => {} } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        {...props?.imageProps}
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          setIndex(props?.item?.index);
          setIsOpen(true);
        }}
      />

      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ borderRadius: "50%" }}
            animate={{ borderRadius: ["40%", "20%", "10%"] }}
            exit={{ borderRadius: "50%", opacity: 0 }}
            transition={{ duration: "0.3" }}
            className={styles["download-button-container"]}
            onClick={() => handleDownloadImage(props?.item?.src)}
          >
            <HiDownload color={"#fff"} style={{ fontSize: "1.5rem" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThumbnailImage;
