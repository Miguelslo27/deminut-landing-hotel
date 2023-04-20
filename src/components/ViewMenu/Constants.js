export const BACKGROUND_IMAGES = [
  {
    type: 'restaurant',
    postalImage: 'https://images2.alphacoders.com/862/862730.jpg',
  },
  {
    type: 'bar',
    postalImage: 'https://media.gettyimages.com/photos/wood-table-with-blur-light-in-night-caferestaurant-background-picture-id683388474?b=1&k=6&m=683388474&s=612x612&w=0&h=xd9A1v91tUdQphU2G2ETl91PVo4c3Kpo4Xnk-4mD_pc=',
  },
  {
    type: 'coffee_shop',
    postalImage: 'https://wallpaperplay.com/walls/full/3/2/8/348659.jpg'
  },
  {
    type: 'hotel',
    postalImage: 'https://r-fa.bstatic.com/xdata/images/xphoto/1920x810/70130797.jpg?k=a4f2d54fdf6ce8124fe2db95f049a04c74a454a8b2af4349da13836f217d97b2&o=',
  },
  {
    type: 'other',
    postalImage: 'https://cdn.hipwallpaper.com/i/75/43/lkchnp.jpg',
  }
];

export const MENU_VARIANTS = {
  search: {
    width: '85%',
    borderRadius: 32,
  },
  sections: {
    width: '100%',
    borderRadius: 0,
  },
}

export const SEARCH_INPUT_VARIANTS = {
  search: {
    display: 'flex',
  },
  sections: {
    display: 'flex',
  }
}

export const SEARCH_VARIANTS = {
  search: {
    display: 'flex',
  },
  sections: {
    display: 'none',
  }
}

export const FAB_VARIANTS = {
  search: {
    display: 'none',
    marginRight: 0,
    marginBottom: 0,
  },
  sections: {
    display: 'flex',
    marginRight: 20,
    marginBottom: 20,
  }
}

export const ITEM_ORDER_VARIANTS = {
  normal: {
    marginLeft: 0,
    marginRight: 0,
    border: 'none',
    borderRadius: 0,
  },
  selected: {
    marginLeft: -16,
    marginRight: -16,
  }
}

export const ITEM_AMOUNT_VARIANTS = {
  normal: {
    display: 'none',
  },
  selected: {
    display: 'flex',
  },
}

export const BOTTOM_PANEL_VARIANTS = {
  off: {
    y: 95,
    height: 0,
  },
  mini: {
    y: 0,
    height: '90px',
  },
  expanded: {
    y: 0,
    height: '98%',
    zIndex: 3,
  },
}

export const VIEW_CONTAINER_VARIANTS = {
  normal: {
    filter: 'brightness(100%)',
  },
  dark: {
    filter: 'brightness(50%)',
  }
}

export const REFETCH_ORDER_INTERVAL = 30000;