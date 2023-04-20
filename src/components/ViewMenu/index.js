import React from 'react';


const ViewMenu = ({ menuId }) => {
  if (process.env.NODE_ENV === 'development') {
    window.location.href = `http://localhost:3001/menu/?id=${menuId}`;
  } else {
    window.location.href = `https://portal.deminut.com/menu/?id=${menuId}`;
  }
  return <></>
};

export default ViewMenu;
