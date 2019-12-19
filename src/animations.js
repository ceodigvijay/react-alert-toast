import { Transition } from "react-transition-group";
import React from "react";
import { animations } from "./options";

const defaultStyle = {
  [animations.FADE]: {
    transition: "opacity 300ms ease-in-out",
    opacity: 0
  },
  // [animations.SLIDE_IN_LEFT]: {
  //   position: 'relative',
  //   left: "-100px",
  //   transition: '1s'
  // },
  [null]:{
    opacity: 1,
    transition: '0s'
  }
};

const animationStyles = {
  [animations.FADE]: {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  },
  [null]:{
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  }
};

export const Animation = (inProp, animationType, children) => {
  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {state => (
          <div
            style={{
              ...defaultStyle[animationType],
              ...animationStyles[animationType][state]
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};
