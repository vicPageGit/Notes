import { useSectionState } from "../../hooks/useSectionState";
import { tileStyles } from "../../constants/constants";
import { sectionAnimations } from "../../functions/main-functions";

//COMPONENTS
import Lightbox from "react-image-lightbox";
import { Gallery } from "react-grid-gallery";
import { FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";

//STYLES
import SectionStyles from "./section.module.css";

const SectionImage = (props) => {
  const { title, description, images } = props;
  const {
    isOpen,
    imageSrc,
    setIsOpen,
    showSection,
    setShowSection,
    variableIndex,
    setVariableIndex,
  } = useSectionState({ props });

  return (
    <div className={SectionStyles["gallery-container"]}>
      <div
        className={SectionStyles["title-container"]}
        onClick={() => setShowSection(!showSection)}
      >
        <div>
          <h4 className={SectionStyles["title"]}>{title}</h4>
          <small className={SectionStyles["description"]}>{description}</small>
        </div>
        <div>
          <FiChevronRight
            style={{
              width: 40,
              height: 40,
              transition: "all 0.1s",
              transform: showSection ? "rotate(90deg)" : "rotate(0deg)",
            }}
            color={"#444"}
          />
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial="in"
          animate="an"
          transition={{ duration: 0.4 }}
          variants={sectionAnimations({ showSection })}
        >
          <Gallery
            margin="1rem"
            thumbnailImageComponent={(props) => (
              <ThumbnailImage
                {...props}
                setIndex={setVariableIndex}
                setIsOpen={setIsOpen}
              />
            )}
            images={showSection ? images : []}
            enableImageSelection={false}
            tileViewportStyle={tileStyles()}
            defaultContainerWidth={"80vw"}
          />
        </motion.div>
      </AnimatePresence>
      {isOpen && (
        <Lightbox
          mainSrc={imageSrc}
          nextSrc={imageSrc}
          prevSrc={imageSrc}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setVariableIndex((photoIndexItem) => photoIndexItem - 1)
          }
          onMoveNextRequest={() =>
            setVariableIndex((photoIndexItem) => photoIndexItem + 1)
          }
        />
      )}
    </div>
  );
};

export default SectionImage;
