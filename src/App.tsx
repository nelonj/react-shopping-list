import React, { useState } from 'react';
import { setConstantValue } from 'typescript';
import './App.css';



// let myItemList: { item: string, amount: string }[] = [{ item: "", amount: '' }]
// let cloneList: { item: string, amount: string }[] = [{ item: "", amount: '' }]

interface Item {
  item: string,
  amount: string
}
type List = Item[]

function App() {
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  let startingList: List = []
  const [list, setList] = useState(startingList)
  console.log('hello')

  function removeItem(id: number) {

    // return (
    //   cloneList = [...myItemList],
    //   myItemList = myItemList.filter((element, index) => index !== id),
    //   setList(cloneList)
    // )
  }

  function ShoppingList() {
    return (
      <ul>
        {list.map((element, index) =>
          <li key={index}> {`${element.item} : ${element.amount}`}
            <button className='delete-button' onClick={() => removeItem(index)} > X </button>
          </li>)}
      </ul>
    )
  }

  function clickHandler() {

    // return (
    //   cloneList = [...myItemList],
    //   myItemList.push({ item: item, amount: amount }),
    //   setList(cloneList)
    // )
  }

  

  return (
    <div className="App">
      <h1> My Shopping List </h1>

      <div className="input-bar">
        <input value={item} onChange={(event) => setItem(event.target.value)} />
        <input value={amount} onChange={event => setAmount(event.target.value)} />
      </div>

      <div className="register-button">
        <button onClick={clickHandler}> add! </button>

      </div>


      <div className="shopping-list">
        <ul>
          <ShoppingList />
        </ul>
      </div>


    </div>
  );
}

export default App;
