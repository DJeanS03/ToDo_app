import { TasksContextData } from '../../App';
import { Task } from '../Task';
import './styles'
import { TasksContainer } from "./styles";


interface Props {
    tasks: TasksContextData[]
}

export function Tasks( {tasks}: Props ) {
    const amountTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.isCompleted).length

    return (
        <TasksContainer>
            <div className="header">
                <div>
                    <p>Tarefas Criadas 38:34</p>
                    <span>{amountTasks}</span>
                </div>

                <div>
                    <p className='completedTasks'>Concluídas</p>
                    <span>{completedTasks} de {amountTasks}</span>
                </div>
            </div>

            <div className='toDo_list'>
                {tasks.map((task) => (
                    <Task key={task.id} task={task}/> 
                ))}
            </div>

        </TasksContainer>
    )
}