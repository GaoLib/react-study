import { useDispatch, useSelector } from "react-redux"

function ReactReduxHookPage(props) {
  const dispatch = useDispatch()
  const count = useSelector(({count}) => count)
  return (
    <div>
      <h3>ReactReduxHookPage</h3>
      <button onClick={() => dispatch({type: 'ADD'})}>{count}</button>
    </div>
  )
}

export default ReactReduxHookPage