import { ChangeEvent, FormEvent, useState } from 'react';
import './styles'
import { HeaderContainer } from "./styles";

interface Props {
    handleNewTask: (taskDescription: string) => void
}

export function Header({handleNewTask}: Props){
    const [description, setDescription] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        handleNewTask(description)
        setDescription('')
    }

    function onChangeDescription(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value)
    }

    return (
            <HeaderContainer>
                <nav className="container">
                    <nav className="header">
                        <div className="logo">
                            <span className="before"><i className='bx bxs-rocket icon' ></i> To</span>
                            <span className="after">Do</span> 
                        </div> 
                        <form className="taskForm" onSubmit={handleSubmit}>
                            <input placeholder="Adicione uma nova tarefa" type="text" onChange={onChangeDescription} value={description} />
                            <button> Criar <i className='bx bx-plus-circle'></i></button>
                        </form>        
                    </nav>
                </nav>
            </HeaderContainer>
       
    )
}