import React from 'react'

function Item({item, dispatch}) {

    function deleteHandler(e){
        dispatch({type: 'DELETE', payload: item.key});
    }

    function updateHandler(e){
        dispatch({type: 'EDIT', payload: item});
    }
    
  return (
     <div style={{ margin: '10px' }}>{item.name}
    <button style={{ margin: '10px' }} onClick={deleteHandler}>X</button>
    <button style={{ margin: '10px' }} onClick={updateHandler}>Edit</button>

  </div>
  )
}

export default Item
