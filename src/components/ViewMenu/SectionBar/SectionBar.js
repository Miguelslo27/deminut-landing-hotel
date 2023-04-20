import './index.css';
import React, { useCallback } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { SEARCH_VARIANTS } from '../Constants';

const SectionBar = ({
  animate,
  listRef,
  sectionRefs,
  searchTerms,
  sections,
}) => {

  const calculateScroll = index => {
    const sectionRefScroll = sectionRefs.current.slice(0, index)
      .reduce((acc, curr) => acc + (curr.clientWidth + 32), 0);
    return sectionRefScroll;
  };

  const handleSetActive = useCallback(index => {
    if (listRef.current) {
      listRef.current.scrollLeft = calculateScroll(index);
    }
  }, [listRef]);

  return (
    <motion.div
      animate={animate}
      variants={SEARCH_VARIANTS}
      className="view-search-sections"
      ref={listRef}
    >
      {!searchTerms && sections.map((section, index) => (
        <Link
          key={`section-${index}`}
          to={`section-${index}`}
          spy
          offset={-350}
          duration="200"
          smooth="easeOutSine"
          className="view-search-section-container"
          activeClass="view-search-section-container-active"
          onSetActive={() => handleSetActive(index)}
        >
          <span
            id={`section-top-${index}`}
            ref={r => sectionRefs.current[index] = r}
            className="view-search-section-text">
            {section?.name}
          </span>
        </Link>
      ))}
    </motion.div>
  );
}

export default SectionBar;
