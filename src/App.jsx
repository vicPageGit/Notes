import "./App.css";
import SectionImage from "./components/Section/Section";
//
import { CgChevronDoubleUpR } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { handleScrollTop } from "./functions/main-functions";
import { useAppState } from "./hooks/useAppState";

function App() {
  const { showScrollTo, sectionImages } = useAppState();

  return (
    <div className="App" id="App">
      {sectionImages?.map((section) => {
        return (
          <SectionImage
            images={section?.images}
            title={section?.title}
            description={section?.description}
          />
        );
      })}
      <AnimatePresence exitBeforeEnter>
        {showScrollTo && (
          <motion.div
            initial={{ position: "fixed", right: "-10rem", bottom: "3rem" }}
            animate={{ right: "3rem" }}
            exit={{ right: "-10rem" }}
            transition={{ duration: 0.5 }}
            onClick={() => handleScrollTop()}
          >
            <CgChevronDoubleUpR className="button-scroll-to" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
