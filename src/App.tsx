import React, { useState } from 'react';
import './App.css';



// let myItemList: { item: string, amount: string }[] = [{ item: "", amount: '' }]
// let cloneList: { item: string, amount: string }[] = [{ item: "", amount: '' }]

interface Item {
  item: string,
  amount: string
}
type List = Item[]

interface ShoppingListProps {
  myList: List
}

function App() {
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  let startingList: List = []
  const [list, setList] = useState(startingList)

  function removeItem(id: number) {

    let cloneList: List = list.filter((element, index) => index !== id);
    setList(cloneList)

  }

  function ShoppingList(props: ShoppingListProps) {
    return (
      <ul>
        {props.myList.map((element, index) =>
          <li key={index}> {`${element.item} : ${element.amount}`}
            <button className='delete-button' onClick={() => removeItem(index)} > X </button>
          </li>)}
      </ul>
    )
  }

  function clickHandler() {

    let cloneList: List = [...list];
    cloneList.push({ item: item, amount: amount });
    setList(cloneList)
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
          <ShoppingList myList = {list} />
        </ul>
      </div>


    </div>
  );
}

export default App;
