import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
  (state) => {
    return {count: state.count}
  }
)
class ReactReduxPage extends Component {
  render() {
    console.log(this.props)
    const { count, dispatch } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({type: 'ADD', payload: 100})}>
          dispatch add
        </button>
      </div>
    )
  }
}

export default ReactReduxPage