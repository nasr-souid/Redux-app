import * as types from './ActionTypes';

const initialState={
    tasks:[{id:1,description:"Wake Up",isDone:false}]
};  
const TasksReducer =(state=initialState,action)=>{
    switch(action.type){

        case types.ADD_TASK:
            const newTask={
                id:Math.random,
                description:action.payload,
                isDone:false
            }
        const addedTasks=[...state.tasks,newTask]

            return{
                ...state,
                tasks:addedTasks,
            }
         case types.REMOVE_TASK:
                const filterTask=state.tasks.filter((t)=>t.id!==action.payload.id);
                return{
                    ...state,
                    tasks:filterTask,
                }
        case types.EDIT_TASK:
            const editTasks=state.tasks.map((task)=>{
                if(task.id===action.payload.id){
                    return{...task,task:action.payload.editTask}
                }
                return task
            })
            return{
                ...state,
                tasks:editTasks
            }

            
        case types.ISDONE_TASK:
            const toggleTasks=state.tasks.map((t)=>
            t.id==action.payload.id?{...action.payload,isDone:!action.payload.isDone}:t)

            return {
                ...state,
                tasks:toggleTasks,
            }
        default:
            return state;    
        }
}
export default TasksReducer