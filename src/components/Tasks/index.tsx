import { TasksContextData } from '../../App';
import { Task } from '../Task';
import './styles'
import { TasksContainer } from "./styles";


interface Props {
    tasks: TasksContextData[],
    onDelete: (taskId: number) => void
    onComplete: (taskId: number) => void
}

export function Tasks( {tasks, onDelete, onComplete}: Props ) {
    const amountTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.isCompleted).length

    return (
        <TasksContainer>
            <div className="header">
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{amountTasks}</span>
                </div>

                <div>
                    <p className='completedTasks'>Concluídas</p>
                    <span>{completedTasks} de {amountTasks}</span>
                </div>
            </div>

            <div className='toDo_list'>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} /> 
                ))}

            {tasks.length <= 0 && (
                <section className='emptyTasks'>
                    <i className='bx bx-clipboard'></i>
                    <div>
                        <p>Você ainda não tem tarefas cadastradas.</p>
                        <span>Crie tarefas e organize seus itens a fazer.</span>
                    </div>
                </section>
            )}

            </div>
        </TasksContainer>
    )
}