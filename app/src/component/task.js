import React,{useState,useEffect} from "react";
import axios from "axios";
import css from './tasks.module.css';
import { addTask,deleteTask,removeAllTask,removeTask } from "../action/action";
import {useSelector,useDispatch} from 'react-redux'
//import {useNavigate} from 'react-router-dom';

const Tasks = ()=>{
    //const Navigate = useNavigate();
    const [oldtasks, setoldtasks] = useState([])
    const [input, setinput] = useState('');
    const [task, settask] = useState(input);
    const dispatch = useDispatch();
    const [list,setlist] = useState();
    
    //let data = prop;
    const taskFetch =  async ()=>{

         
     }

    useEffect(()=>{
        settask(input)
    },[input])
    
    const functionInput = e =>{
        const inputvalue = e.target.value;
        setinput(inputvalue);    
        
    }
    const addFunction =()=>{
        dispatch(addTask(input),setinput(""))
    }
        var data = useSelector((state)=>state.taskReducer.list)
    useEffect(() => {
        setlist(data)
    }, [addFunction]);
    return<>
        <div className={css.container}>
            {
            //start of top
            }
            {
                // end of top and start of mid bottom
            }
            <div className={css.mid_bottom}>
                <input type="text" value={input} className={css.input} placeholder="Enter Task here" onChange={functionInput}/>
                <br />
                <br />
                <button className={css.addbtn} onClick={addFunction}>+</button>
                <div className={css.list_div}>
                {data.map((item,index)=>{

                    return(
                 <div className={css.list} key={item.id}>
                    <h3 className={css.item}>{index+1 +"  "+item.data}</h3>
                    <button className={css.delbtn}
                     onClick={()=>{
                        //settask(input)
                        console.log(task)
                        dispatch(removeTask(item.id))}
                     }>-</button>
                </div>
                    )
                })}


               
                </div>
                <br />
                <button className={css.rmbtn} onClick={()=>dispatch(removeAllTask())
                }>Remove all</button>
            </div>

        </div>
    
    </>
}

export default Tasks;