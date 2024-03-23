import React from 'react'
import Item from './Item'

function List({nameArray, dispatch}) {
  return (
    <div>

{
        nameArray.map(e => {

          return <Item key={e.key} item={e} dispatch={dispatch}/>
        })
      }

      
    </div>
  )
}

export default List
