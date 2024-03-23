import { useReducer} from 'react';
import './App.css';
import List from './Components/List';
import InputField from './Components/InputField';

function App() {

  let nameEdit = null;

  function reducerFunction(nameArray, action){

    switch(action.type)
    {
      case 'ADD':

      return [...nameArray, action.payload];

      case 'DELETE':
      nameEdit = null;


      return nameArray.filter((e)=>{
        if(e.key!== action.payload)
        return e;

      })


      case 'EDIT':
        nameEdit = action.payload;
        return [...nameArray];

      case 'UPDATE':
        const idx = nameArray.findIndex((item)=>{
          if(item.key=== action.payload.key)return true;
        })

        nameArray.splice(idx, 1, action.payload);

        nameEdit = null;

        return [...nameArray];


      default:
      
      return [...nameArray];

    }

  }

  const[nameArray, dispatch] = useReducer(reducerFunction, []);


  

  return (
    <div className="App">

      <div>To-Do-List</div>

      <InputField dispatch={dispatch} nameEdit={nameEdit}/>

      <List nameArray={nameArray} dispatch={dispatch}/>
      
    </div>
  );
}

export default App;
