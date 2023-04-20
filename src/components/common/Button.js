import React from 'react';
const styles = {
  button: {

  },
  buttonOutline: {
    display: 'flex',
    flexDirection: 'row',
    padding: '8px 14px',
    border: '1px solid #ff1744',
    borderRadius: 16,
    alignItems: 'center',
  },
  title: {
    color: '#ff1744',
  },
}

export const ButtonTypes = {
  SOLID: 'SOLID',
  OUTLINE: 'OUTLINE'
};

const Button = ({ type, icon, title, color }) => (
  <div style={type === ButtonTypes.OUTLINE ? styles.buttonOutline : styles.button}>
    {icon && (<i className={icon} style={{ marginRight: 8, color: "#ff1744" }} />)}
    <p style={styles.title}>{title}</p>
  </div>
);

export default Button;