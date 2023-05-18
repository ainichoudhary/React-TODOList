import React, { useState } from "react";
import "./App.css";
import ListItem from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
    // function hook
    let [inputItem, setInputItem] = useState("");
    let [items, setItems] = useState([]);
    let [editItemIndex, setEditItemIndex] = useState();
    let[update,setUpdate]=useState(true)


        let handleItemInput = (event) => {
        setInputItem(event.target.value);
    };
    let addItem = () => {
        setItems((oldItems) => {
            if (editItemIndex) {
                return oldItems.map((item, index) => {
                    if (index === editItemIndex) {
                        return inputItem;
                    }
                    return item;
                });
            }
            return [...oldItems, inputItem];
        });

        setEditItemIndex(undefined);
        setInputItem("");
    };
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((entry, index) => {
                return index !== id;
            });
        });
    };
    const removeall=()=>{
        setItems([])
    }

    const updateItem = (id) => {
        setInputItem(items[id]);
        setEditItemIndex(id);
            };
    return (
        <div className="main">
            <h1 className="main-title">To Do List</h1>
            <div>
                <input
                    className="input"
                    type="text"
                    placeholder="List Item"
                    value={inputItem}
                    onChange={handleItemInput}
                    required
                />
                <button className="input-btn" onClick={addItem}>
                     Add New Item
                </button>
                {/*<button className="input-btn"*/}
                {/*        onClick={addItem}>*/}
                {/*    {update ? "addItem" :"update"}</button>*/}
            </div>


            <ol>
                {items.map((item, index) => {
                    return (
                        <ListItem
                            text={item}
                            id={index}
                            key={index}
                            onDelete={deleteItem}
                            onEdit={updateItem}
                        />
                    );
                })}
            </ol>

            <div className="checklist">
                <button onClick={removeall}>clear out</button>
            </div>
        </div>

    );
}

export default App