import React, { Component } from 'react'
import DemoTitle from './DemoTitle'
import DemoHook from './components/DemoHook'
import VisibilityIcon from './components/VisibilityIcon'

class DemoHookWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDemoTitle: true
    }
  }

  toggleDemoTitle = () => {
    this.setState({showDemoTitle: !this.state.showDemoTitle})
  }

  setHeader = () => {
    const {name} = this.props
    return {
      left: [
        <span>{`Title: ${name}`}</span>
      ],
      right: [
        <VisibilityIcon showDemoTitle={this.state.showDemoTitle} toggleDemoTitle={this.toggleDemoTitle}/>
      ]
    }
  }
    
  render() {
    const {name, message} = this.props

    return (
      <div className="item">
        {
          this.state.showDemoTitle &&
          <DemoTitle name={name} message={message}/>
        }
        <DemoHook />
      </div>
    )
  }
}

export default DemoHookWrapper