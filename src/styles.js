import { positions, types } from "./options";

export const getStyles = (position, type, customStyle) => {
  customStyle = {
    textAlign: 'center',
    position: 'fixed',
    display: 'inline-block',
    minWidth: '350px',
    fontFamily: "'Courier New', Courier, monospace",
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '15px',
    zIndex: '100',
    ...customStyle
  }

  switch(type){
    case types.SUCCESS:
      customStyle = {
        backgroundColor: 'green',
        color: '#ecf0f1',
        background: 'linear-gradient(to right, #8DC26F, #76b852)',
        ...customStyle
      }
      break
    case types.ERROR:
      customStyle = {
        backgroundColor: 'red',
        color: '#ecf0f1',
        background: 'linear-gradient(to right, #93291E, #ED213A)',
        ...customStyle
      }
      break
    case types.INFO:
      customStyle = {
        backgroundColor: 'blue',
        color: '#ecf0f1',
        background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
        ...customStyle
      }
      break
    case types.CUSTOM:
      customStyle = {
        border: '1px solid #333',
        ...customStyle
      }
      break
    default:
      break
  }
  
  switch (position) {
    case positions.TOP_LEFT:
      return {
        top: "10px",
        left: "10px",
        ...customStyle
      };
    case positions.TOP_CENTER:
      return {
        top: "10px",
        left: "50%",
        transform: 'translate(-50%, 0)',
        ...customStyle
      };
    case positions.TOP_RIGHT:
      return {
        top: "10px",
        right: "10px",
        ...customStyle
      };
    case positions.MIDDLE_LEFT:
      return {
        top: "50%",
        left: "10px",
        ...customStyle
      };
    case positions.MIDDLE_CENTER:
      return {
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        ...customStyle
      };
    case positions.MIDDLE_RIGHT:
      return {
        top: "50%",
        right: "10px",
        ...customStyle
      };
    case positions.BOTTOM_LEFT:
      return {
        bottom: "10px",
        left: "10px",
        ...customStyle
      };
    case positions.BOTTOM_CENTER:
      return {
        bottom: "10px",
        left: "50%",
        transform: 'translate(-50%, 0)',
        ...customStyle
      };
    case positions.BOTTOM_RIGHT:
      return {
        bottom: "10px",
        right: "10px",
        ...customStyle
      };
    default:
      return {
        bottom: "10px",
        right: "10px",
        ...customStyle
      };
  }
};
