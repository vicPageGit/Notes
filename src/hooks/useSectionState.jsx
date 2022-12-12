import { useEffect, useMemo, useState } from "react";

export const useSectionState = ({ props }) => {
  const { images, title, description } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [variableIndex, setVariableIndex] = useState(null);

  const imageSrc = useMemo(() => {
    return images?.[variableIndex]?.src;
  }, [variableIndex]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [isOpen]);

  return {
    title,
    isOpen,
    imageSrc,
    setIsOpen,
    showSection,
    setShowSection,
    variableIndex,
    setVariableIndex,
  };
};
