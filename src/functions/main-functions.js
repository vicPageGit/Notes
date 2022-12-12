import { ImagesData } from "../data/imagesData";
import { saveAs } from "file-saver";

export const getGallery = async ({ setSectionImages = () => {} }) => {
  try {
    const images = ImagesData;
    let newImages = ImagesData.map((section) => {
      return {
        ...section,
        images: section?.images.map((img, index) => {
          return { src: img, index };
        }),
      };
    });
    setSectionImages(newImages ?? []);
  } catch (e) {
    console.error("Error al cargar imagenes");
  }
};

export const handleScrollTop = () => {
  window.scrollTo(null, 0);
};

export const sectionAnimations = ({ showSection }) => {
  return {
    in: {
      opacity: 0,
    },
    an: {
      opacity: showSection ? 1 : 0,
    },
  };
};

export const handleDownloadImage = (url) => {
  saveAs(url);
};
