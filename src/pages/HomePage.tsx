import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getTasks } from '../redux/reducers/tasks/tasksSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getTasks())
    },[dispatch])

  const tasksData:any = useSelector((state:any)=>state.taskReducer)

  const {taskList} = tasksData

  return (
    <div>
      {(taskList || []).map((task:any)=>{
         return (<div key={task?.id}>{task.title}</div>)
      })}
    </div>
  )
}

export default HomePage