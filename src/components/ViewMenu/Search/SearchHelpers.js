export const filterBySearchTerms = (menu, searchTerms) => {
  if (searchTerms) {
    const filterSections = menu.sections
      .map(section => {
        const filterItems = section.items.filter(item => item.name.toLowerCase().includes(searchTerms.toLowerCase()));
        return {
          ...section,
          items: filterItems,
        }
      }).filter(section => section.items.length);
    return filterSections.length ? filterSections : menu.sections.filter(section => section.name.toLowerCase().includes(searchTerms.toLowerCase()));
  } else {
    return menu.sections;
  }
}

