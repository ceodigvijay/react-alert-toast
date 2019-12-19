import React from "react";
import { getStyles } from "./styles";
import { positions, types, animations } from "./options";
import { Animation } from "./animations";
import PropTypes from "prop-types";

class Toast extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
      display: false
    };

    /* Delay the loading */
    setTimeout(() => {
      this.setState({ display: true });
    }, props.delayBeforeLoad || 500);

    /* If closeButton is false set the timeout */
    if (!props.closeButton) {
      setTimeout(() => {
        this.setState({ display: false });
      }, props.timeout || 2000);
    }
  }
  /* Constructor closes here */

  render() {
    /* If closeButton props is true set the button */
    if (this.props.closeButton) {
      var closeBtn = (
        <div
          className="ran-close"
          onClick={() => this.setState({ display: false })}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            display: "block"
          }}
        >
          X
        </div>
      );
    }
    if (this.props.icon) {
      var logoElement = (
        <div className="ran-icon" style={{ display: "inline-block" }}>
          <img
            src={this.props.icon}
            alt="Icon"
            width="50px"
            height="50px"
            style={{ verticalAlign: "middle" }}
          />
        </div>
      );
    }

    var fullElement = (
      <div
        style={getStyles(
          this.props.position || positions.BOTTOM_RIGHT,
          this.props.type,
          this.props.style
        )}
      >
        {closeBtn}
        {logoElement}
        <div className="ran-content" style={{ display: "inline-block" }}>
          {this.props.message}
        </div>
      </div>
    );
    fullElement = Animation(
      this.state.display,
      this.props.animation || null,
      fullElement
    );
    return <div>{fullElement}</div>;
  }
}

Toast.propTypes = {
  type: PropTypes.oneOf(Object.values(types)),
  position: PropTypes.oneOf(Object.values(positions)),
  animation: PropTypes.oneOf(Object.values(animations)),
  icon: PropTypes.string,
  timeout: PropTypes.number,
  delayBeforeLoad: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  message: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  closeButton: PropTypes.bool
};

Toast.defaultProps = {
  type: types.CUSTOM
};

export default Toast;
