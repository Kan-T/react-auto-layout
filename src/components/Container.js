import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons/faExpandArrowsAlt";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.ref = React.createRef();
    this.child = React.cloneElement(this.props.children, {ref: this.ref});
    
  }

  componentDidMount () {
    if(this.ref.current && typeof(this.ref.current.setHeader) === "function") {
      this.refresh();
    }
  }

  setHeader = () => {
    if(this.ref.current && typeof(this.ref.current.setHeader) === "function") {
      return this.ref.current.setHeader();
    }
    return {};
  }
  
  genDefaultIcons = (name) => {
    const {isEditable} = this.props;
    const {hideMinIcon, hideMaxIcon} = this.props.layout;
    return (
      <>
        {
          !hideMinIcon && !isEditable &&
            (
              <FontAwesomeIcon icon={faMinus}
                className="autoLayoutHeaderItem"
                name={name}
                onClick={this.props.minItem}
              />
            )
        }
        {
          !hideMaxIcon && !isEditable &&
            (
              <FontAwesomeIcon icon={faExpandArrowsAlt}
                className="autoLayoutHeaderItem"
                name={name}
                onClick={this.props.onMaxItem}
              />
            )
          }
      </>
    );
  }

  // As we get self defined components in header from this.ref.current.setHeader(), those components are children of Container. 
  // When we click those components, we changed the state of the environment where those components are defined, but Container won't update. 
  // For letting components' in header rerend, Container has to refresh.
  refresh = () => {
    // Use setTimeout, so state in header's icon and etc. would update first.
    setTimeout(() => {
      this.setState({});
    }, 0);
  }

  render() {
    let {name, layout, unMinItem, getMaxItemClass, onRemoveItem} = this.props;
    const header = this.setHeader();
    const isMin = this.props.miniItems.includes(name);

    return (
      <div name={name} 
        className={`autoLayoutComponent ${layout.className || ""} ${getMaxItemClass(name)} ${isMin? "autoLayoutHide" : ""}`} 
        style={layout.style}
      >
        {!layout.hideHeader && (
          <div className="autoLayoutHeader">
            <div className="autoLayoutToolStyle">
              {
                !layout.hideDefaultTitle &&
                <span className="autoLayoutTitle">{name}</span>
              }

              {header.left && header.left.map((component, i) => (
                <span key={`${name}left${i}`}
                  onClick={this.refresh}
                  onChange={this.refresh}
                >
                  {component}
                </span>
              ))}
            </div>

            <div className="autoLayoutToolStyle">
              {header.right && header.right.map((component, i) => (
                <span key={`${name}right${i}`} 
                  onClick={this.refresh}
                  onChange={this.refresh}
                >
                  {component}
                </span>
              ))}

              {this.genDefaultIcons(name)}

              {/* <FontAwesomeIcon icon={faTimes} 
                className="remove mr-2"
                name={name}
                onClick={onRemoveItem}
              /> */}
            </div>
          </div>
        )}

        <div className="autoLayoutContent">
          {this.child}
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  name: PropTypes.string,
  layout: PropTypes.object.isRequired,
  minItem: PropTypes.func.isRequired,
  unMinItem: PropTypes.func.isRequired,
  onMaxItem: PropTypes.func.isRequired,
  getMaxItemClass: PropTypes.func.isRequired
};

Container.defaultProps = {
  name: ""
};