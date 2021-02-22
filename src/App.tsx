import React, {useState} from 'react';
import { setConstantValue } from 'typescript';
import './App.css';



let myItemList: string[] = []
let cloneList: string[] = []
let printList: JSX.Element[] = []
let myAmountList: string[] = []


function App() {
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([''])
  console.log('hello')
  
  function removeItem(id: number) {
    
    return (
    cloneList = [...myItemList],
    myItemList = myItemList.filter((element, index) => index !== id ),
    myAmountList = myAmountList.filter((element, index) => index !== id ),
    printList = myItemList.map((element, index) => 
      <li key={index}> {`${element} : ${myAmountList[index]}`} 
      <button className='delete-button' onClick={() => removeItem(index)} > X </button> 
      </li>),
    setList(cloneList)
    )
  }

  function clickHandler() {
    
    return (
    cloneList = [...myItemList],  
    myItemList.push(item),
    myAmountList.push(amount.toString()),
    printList = myItemList.map((element, index) => 
      <li key={index}> {`${element} : ${myAmountList[index]}`} 
      <button className='delete-button' onClick={() => removeItem(index)} > X </button> 
      </li>),
    setList(cloneList)
    )
  }
//  let printList = myList.map((element, index) => <li key={index}> {`${element} : ${amount}`} </li>)
  
  return (
    <div className="App">
      <h1> My Shopping List </h1>
      
      <div className="input-bar">
      <input value ={item} onChange={(event) => setItem(event.target.value)} /> 
      <input value ={amount} onChange={event => setAmount(event.target.value)} />
      </div>
      
      <div className="register-button">
        <button onClick={clickHandler}> add! </button>
       
      </div>
     
     
      <div className="shopping-list">
        <ul> 
          {printList}
        </ul>
      </div>
      
      
    </div>
  );
}

export default App;
