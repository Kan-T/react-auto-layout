import React from "react";
import FlexRow from "./FlexRow";
import FlexCol from "./FlexCol";
import Container from "./Container";
import "../styles/AutoLayoutStyle.scss";

export default class AutoLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layout: this.props.layout,
      miniItems: [],
      maxItemName: null
    };

    this.children = React.Children.toArray(this.props.children);
  }

  minItem = e => {
    let name = e.currentTarget.getAttribute("name");
    if(!this.state.miniItems.includes(name)) {
      this.setState({ miniItems: [...this.state.miniItems, name] });
    }
  }

  unMinItem = e => {
    let name = e.currentTarget.getAttribute("name");
    let i = this.state.miniItems.findIndex(el => el === name);
    if(i > -1) {
      let items = [...this.state.miniItems];
      items.splice(i,1);
      this.setState({ miniItems: items });
    }
  }

  onMaxItem = e => {
    if(this.state.maxItemName) {
      this.setState({maxItemName: null});
    } else {
      let name = e.currentTarget.getAttribute("name");
      this.setState({maxItemName: name});
    }
  }

  getMaxItemClass = maxItemName => {
    if(this.state.maxItemName === null || this.state.maxItemName !== maxItemName) {
      return "";
    }else{
      return "autoLayoutMax";
    }
  }

  genItem = (layout) => {
    switch (layout.type) {
      case "col":
        return this.genCol(layout);

      case "row":
        return this.genRow(layout);

      case "component":
        return this.genComponent(layout);

      default:
        throw Error(`Layout's element root type is not correct. Expecting col, row, component; received: ${layout.type}`);
    }
  }

  genCol = (layout) => {
    if(layout.type !== "col") {
      throw Error(`Layout's element type is not correct. Expecting col, received: ${layout.type} with name ${layout.name}`);
    }

    return (
      <FlexCol key={layout.name} className={`autoLayoutCol ${layout.className}`} style={layout.style}>
        {Array.isArray(layout.items) && layout.items.map(this.genItem)}
      </FlexCol>
    );
  }

  genRow = (layout) => {
    if(layout.type !== "row") {
      throw Error(`Layout's element type is not correct. Expecting row, received: ${layout.type} with name ${layout.name}`);
    }

    return (
      <FlexRow key={layout.name} className={layout.className} style={layout.style}>
        {Array.isArray(layout.items) && layout.items.map(this.genItem)}
      </FlexRow>
    );
  }

  genComponent = (layout) => {
    if(layout.type !== "component") {
      throw Error(`Layout's element type is not correct. Expecting div or component, received: ${layout.type} with name ${layout.name}`);
    }

    const child = this.children.find(child => child.props.name === layout.name);
    return (
      <Container
        key={layout.name}
        name={layout.name}
        layout={layout}
        miniItems={this.state.miniItems}
        minItem={this.minItem}
        unMinItem={this.unMinItem}
        onMaxItem={this.onMaxItem}
        getMaxItemClass={this.getMaxItemClass}
        onRemoveItem={this.onRemoveItem}
        // isEditable={this.state.isEditable}
      >
        {child}
      </Container>
    );
  }

  onRemoveItem = (e) => {
    // Not done yet
    // let name = e.currentTarget.getAttribute("name");
    // let layout = {...this.state.layout};
  }

  render() {
    return (
      <div className={`autoLayoutContainer ${this.props.className}`}>
        {this.genItem(this.state.layout)}
      </div>
    );
  }
}
