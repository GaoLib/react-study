import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../gReactRedux'

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

export default connect(
  // mapStateToProps
  (state) => {
  return {count: state.count}
},
  // mapDispatchToProps  object | function
// {
//   add: () => ({type: 'ADD'}),
//   minus: () => ({type: 'MINUS'})
// }
  (dispatch) => {
    let creators = {
      add: () => ({type: 'ADD'}),
      minus: () => ({type: 'MINUS'})
    }

    creators = bindActionCreators(creators, dispatch)
    return { dispatch, ...creators }
  }
)(ReactReduxPage)