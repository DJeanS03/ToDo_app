import { TasksContextData } from "../../App";
import { TaskContainer } from "./styles";

interface Props {
    task: TasksContextData
}

export function Task({task}: Props ) {
    return (
        <TaskContainer>
            <div className="container">
                <div className="checkbox-wrapper-13">
                    <input type="checkbox" id="c1-13"/> 
                </div>
                <p className="description"> {task.description} </p>
                <i className='bx bx-trash icons'></i>
            </div>
        </TaskContainer>

    )
}