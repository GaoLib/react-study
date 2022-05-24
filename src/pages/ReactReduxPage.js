import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReactReduxPage extends Component {
  render() {
    console.log(this.props)
    const { count, dispatch, add, minus } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({type: 'ADD', payload: 100})}>
          dispatch add
        </button>
        <button onClick={add}>
          add
        </button>
        <button onClick={minus}>
        minus
        </button>
      </div>
    )
  }
}

export default connect((state) => {
  return {count: state.count}
},{
  add: () => ({type: 'ADD'}),
  minus: () => ({type: 'MINUS'})
})(ReactReduxPage)