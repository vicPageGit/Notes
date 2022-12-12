import { useEffect, useState } from "react";
import { getGallery } from "../functions/main-functions";

export const useAppState = () => {
  const [sectionImages, setSectionImages] = useState([]);
  const [showScrollTo, setShowScrollTo] = useState(false);

  useEffect(() => {
    getGallery({ setSectionImages });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      if (window.scrollY > 20 && !showScrollTo) setShowScrollTo(true);
      else setShowScrollTo(false);
    });
  }, []);

  return { showScrollTo, sectionImages };
};
