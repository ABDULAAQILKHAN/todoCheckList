import React,{useState,useEffect} from "react";
import axios from "axios";
import css from './tasks.module.css';
//import {useNavigate} from 'react-router-dom';

const Tasks = ()=>{
    //const Navigate = useNavigate();
    const [oldtasks, setoldtasks] = useState([])
    const [input, setinput] = useState('');
    const [task, settask] = useState(input);
    //let data = prop;
    const taskFetch =  async ()=>{

         
     }
    useEffect(() => {
       // taskFetch()
        // eslint-disable-next-line
    }, []);
    useEffect(()=>{
        settask(input)
    },[input])
    
    const functionInput = e =>{
        const inputvalue = e.target.value;
        setinput(inputvalue);    
        console.log(input)
        
    }
    return<>
        <div className={css.container}>
            {
            //start of top
            }
            <div className={css.top}>

            </div>
            {
                // end of top and start of mid bottom
            }
            <div className={css.mid_bottom}>
                <input type="text" className={css.input} placeholder="Enter Task here" onChange={functionInput}/>
                <br />
                <br />
                <button className={css.addbtn} onClick={()=>{
                    settask(input)
                    let taskObject = {task}
                    axios.post(process.env.REACT_APP_LOCAL+"/addTask",taskObject).then(res=>{
                        console.log(res)
                    })
                }
                    }>+</button>
                
                <div className={css.list}>
                    <ol>

                    </ol>

                </div>

            </div>

        </div>
    
    </>
}

export default Tasks;