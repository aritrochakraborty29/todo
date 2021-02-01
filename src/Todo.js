import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCompo from "./ListCompo";
const Todo = () => {

        const [Item, SetItem] = useState("");
        const [NewItem, SetNewItem] = useState([])
        
        const itemEvent = (event) =>{
            SetItem(event.target.value);
        }
        const listOfItems = () =>{
            SetNewItem((prevValue)=>{
             return [...prevValue, Item]
            });
            SetItem("")
        }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" value={Item} placeholder="Add an Item" onChange={itemEvent} />
                    <Button className="newBtn" onClick={listOfItems}> 
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {NewItem.map((val, index) => {
                            return <ListCompo key={index} text={val}/>
                        })}
                     </ol>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Todo;