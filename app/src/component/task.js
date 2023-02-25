import React,{useState,useEffect} from "react";
import axios from "axios";
import css from './tasks.module.css';
//import {useNavigate} from 'react-router-dom';

const Tasks = (prop)=>{
    //const Navigate = useNavigate();
    const [oldtasks, setoldtasks] = useState([])
    const [input, setinput] = useState('');
    const [task, settask] = useState(input);
    let data = prop;
    const taskFetch =  async ()=>{
         
        const task = await axios.post(process.env.REACT_APP_LOCAL+"/oldtasks",data).catch(err=>alert(err + " please check your internet connection"));

         setoldtasks(task.data.tasks)
     }
    useEffect(() => {
       // taskFetch()
        // eslint-disable-next-line
    }, []);
    useEffect(()=>{
        settask(input)
    },[input])
   /*
   const mapper = oldtasks;
    mapper.map((task, index)=>{
        console.log(task)
        return<></>
    })
       //console.log(a)

   */ 
    //console.log(data)
    
    const functionInput = e =>{
        const inputvalue = e.target.value;
        setinput(inputvalue);    
    }

    const clear = ()=>{
        setinput('')
        console.log(input)
        let id = document.getElementById('input')
        id.value = "";

    }
    return<>
            <div className={css.container}>
            <div className={css.body}>

<h2 className={css.h2}>Reminder's for {data.name}</h2>
</div>
            <input
            onChange={functionInput}
            placeholder='Type it down here' 
            type="text" 
            id="input"
            className={css.input} />
            
            <button 
            onClick={()=>{
                //console.log(typeof(tasks))
                settask(input)
                console.log(task);
                if (task === '') {
                    alert("blank")
                }else{

                    let user = {
                        userdata: data,
                        usertask: task
                    }
                    console.log(user)
                    axios.post(process.env.REACT_APP_LOCAL+"/newtask",user).then(data=>{
                        console.log(data)
                        clear()
                        taskFetch();
                        
                    }).catch(err=>{alert(err)})
                }
            }}
            className={css.btn}>Add</button>
            
            <button className={css.btn} onClick={clear}>Clear</button>
            {oldtasks.map((i,index)=>{

       //console.log(a);
        return<> 
        <div className={css.taskContainer}>
            <h2 className={css.tasksheading}>{i}</h2>
            <div className={css.flexbtn}>

        
            
            <button className={css.delbtn} onClick={()=>{
                let user ={
                    userdata: data,
                    usertask: i
                }
                axios.post(process.env.REACT_APP_LOCAL+"/deletetask",user).then(done=>{
                    console.log(done)
                    
                    taskFetch()
                }).catch(err=>console.log(err))
            }}><i className={`fa-solid fa-trash ${css.dlticon}`}></i></button>

            </div>
        </div>
            
            </>
            })}
        </div>
    
    </>
}

export default Tasks;