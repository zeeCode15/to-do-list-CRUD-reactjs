import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';

   
function InputField({dispatch, nameEdit}) {

  const [item, setItem] = useState({name:'', key: ''});

  function changeHandler(e) {
    // setNameEdit({name: e.target.value, key: uuid() });
    if(nameEdit!==null)
    setItem({...item, name: e.target.value});
    else
    setItem({name: e.target.value, key: uuid()});
  }

  function submitHandler(e) {
    e.preventDefault();

    if(nameEdit!==null)
    {
      dispatch({type: 'UPDATE', payload: item});
    } 
    else

    if (item.name !== '')
      dispatch({type: 'ADD', payload: item})

    // setNameEdit({ name: '', key: '' });
    setItem({name:'', key:''});
  }

  useEffect(()=>{

    if(nameEdit!==null)
    setItem(nameEdit);

  }, [nameEdit]);

    

    return (
        <div>
            <form>
                <input type="text" onChange={changeHandler} value={item.name} />
                <button onClick={submitHandler}>Add</button>
            </form>
        </div>
    )
}

export default InputField
