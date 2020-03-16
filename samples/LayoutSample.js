import React, { Component } from "react";
import AutoLayout from "../src";
// import AutoLayout from "../dist";
import DemoTitle from "./sampleItems/DemoTitle";
import DemoHookWrapper from "./sampleItems/DemoHookWrapper";

class LayoutSample extends Component {
    constructor(props){
      super(props);
      this.state = {
        layout: {
          type: "col",
          name: "root",
          items: [
            {
              type: "row",
              name:"1",
              items: [
                {
                  type: "component",
                  name: "Item01",
                  className: "border",
                  style: {
                    flex: 0,
                    minHeight: "800px",
                    flexBasis: "400px"
                  }
                },
                {
                  type: "col",
                  name:"1.2",
                  style: {
                    flex: 1,
                    flexBasis: "400px"
                  },
                  items: [
                    {
                      type: "component",
                      name: "Item02",
                      className: "border",
                      style: {
                        flex: 1,
                        minHeight: "400px",
                        flexBasis: "400px"
                      },
                      hideHeader: true
                    },
                    {
                      type: "row",
                      name:"1.2-2",
                      items: [
                        {
                          type: "component",
                          name: "Item03",
                          className: "border",
                          style: {
                            flex: 1,
                            minHeight: "400px",
                            flexBasis: "400px"
                          },
                          hideDefaultTitle: true
                        },
                        {
                          type: "component",
                          name: "Item04",
                          className: "border",
                          style: {
                            flex: 1,
                            minHeight: "400px",
                            flexBasis: "400px"
                          },
                          hideDefaultTitle: true,
                          hideMinIcon: true,
                          hideMaxIcon: true
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "component",
                  name: "Item05",
                  className: "border",
                  style: {
                    flex: 0,
                    minHeight: "800px",
                    flexBasis: "300px"
                  }
                },
              ]
            }
          ]
        }
      };
    }

    render(){
      return (
        <React.Fragment>
          <AutoLayout
            layout={this.state.layout}
            className="default"
          >
            <DemoTitle name="Item01"/>
            <DemoTitle name="Item02" message="Hide header; you can add your own header in component"/>
            <DemoHookWrapper name="Item03" message="Hide title, use customized header icon"/>
            <DemoHookWrapper name="Item04" message="Hide title and default icons"/>
            <DemoTitle name="Item05"/>
            <DemoTitle name="Item06"/>
          </AutoLayout>
        </React.Fragment>
      );
    }
}

export default LayoutSample;