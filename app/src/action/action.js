export const addTask = (data)=>{
    return {
        type: "addTask",
        payload:{
            id: new Date().getTime().toString(),
            data
        }
    }
}
export const removeTask = (id)=>{
    return {
        type: "removeTask",
        id
    }
}
export const checkTask = ()=>{
    return {
        type: "checkTask"
    }
}