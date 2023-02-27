const initialState = {
    list : []
}
const taskReducer = (state=initialState,action) =>{
    switch(action.type){
        case "addTask":
            const {id,data} = action.payload;
            return {
                ...state,list: [...state.list,{id,data}]
            } 
        case "removeTask":
            const newList = state.list.filter((item)=>item.id!==action.id);
            return {
                ...state,list: newList
                } 
        case "removeAllTask":
                return{
                    ...state,list:[]
                }   
            default: return state;
        }
}
export default taskReducer;