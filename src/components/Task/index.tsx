import { useState } from "react";
import { TasksContextData } from "../../App";
import { TaskContainer } from "./styles";


interface Props {
    task: TasksContextData
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Task({task, onDelete, onComplete}: Props ) {
     const [isChecked, setIsChecked] = useState(task.isCompleted)

    return (
        <TaskContainer>
            <div className="container">
            <div className="checkbox-wrapper-11">
                    <input value="2" name="r" type="checkbox"
                        onClick={() => onComplete(task.id)}
                        checked={isChecked}     
                        onChange={e => setIsChecked(e.target.checked)} 
                    />
                    <label>{task.description}</label>
                </div>

                {/* <div className="checkbox-wrapper-13">
                    <input
                    type="checkbox" id="c1-13"  
                        onClick={() => onComplete(task.id)}
                        checked={isChecked}     
                        onChange={e => setIsChecked(e.target.checked)}              
                    />
                     
                </div>
                <p className='description'> {task.description} </p> */}
                <i className='bx bx-trash icons' onClick={() => onDelete(task.id)}></i>
            </div>
        </TaskContainer>

    )
}