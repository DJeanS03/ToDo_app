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
        <TaskContainer isCompleted={isChecked}>
            <div className="container">
                <div className="checkbox-wrapper-13">
                    <input
                    type="checkbox" id="c1-13"  
                        onClick={() => onComplete(task.id)}
                        checked={isChecked}     
                        onChange={e => setIsChecked(e.target.checked)}              
                    />
                     
                </div>
                <p className='description'> {task.description} </p>
                <i className='bx bx-trash icons' onClick={() => onDelete(task.id)}></i>
            </div>
        </TaskContainer>

    )
}