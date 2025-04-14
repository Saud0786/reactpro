import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './Data/tabs';
function App() {

  {/* tabbing content */}
   let[activeTabs,setactiveTabs]=useState(0);
   let[activeContent,setActiveContent]=useState(tabs[0])

   let changeData=(index)=>{
       setactiveTabs(index)
       setActiveContent(tabs[index])
   }

   
     {/* TODO content */}
  let[todoList,setTodoList]=useState([]);
  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
    if(!todoList.includes(toname)){
        let finalDolist=[...todoList,toname];
        setTodoList(finalDolist);
    }else{
      alert("ToDO Name already added..")
    }

   event.preventDefault();
  }

  let list = todoList.map((value,index)=>{
       return(
        <TODoListIteam value={value} key={index} indexNum={index} todoList={todoList} setTodoList={setTodoList} />
       )
  })

  return (
    <div className="App">



     {/* tabbing content */}
     <div className='tabing'>
        <h1 style={{textAlign:'left'}}>Tabing heading</h1>
        <ul>
          {tabs.map((tabsitem,i)=>{
            return(
             <li>
              <button onClick={()=>changeData(i)} className={activeTabs==i?'activebtn':''}>{tabsitem.title}</button>
            </li>
            )
          })}
        </ul>
       <div className='contentbg'>
       { 
        activeContent!==undefined?
        <p>{activeContent.description}</p>:''
       }
       </div>
     </div>







     {/* ToDo list content */}
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname'/> <button>save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

     {/* tabbing content */}
function TODoListIteam({value,indexNum,todoList,setTodoList}){
  let[status,setStatus]=useState(false);
  let deleteRow=()=>{
    let finalData=todoList.filter((v,i)=>i!=indexNum)
    setTodoList(finalData);
  }
  let checkStatus=()=>{
    setStatus(!status)
  }
 return(
  <li className={(status)?'completetodo':''} onClick={checkStatus}>{indexNum+1 + " . "}{value} <span onClick={deleteRow}>&times;</span></li>
 )
}