import styled from 'styled-components'

export const TasksContainer = styled.nav`
    
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 5.625rem;
    padding: 0 1rem;

    .header {
      display: flex; 
      align-items: center;
      justify-content: space-between;
      margin-top : 1.5rem;
    }
    
    .header div {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    .header p {
        font-size: 0.875rem;
        font-weight: 700;
        color: ${(props) => props.theme['blue-dark']};
    }
    
    .header p.completedTasks {
        color: ${(props) => props.theme['purple-dark']};
    }

    .header span {
        font-size: 0.75rem;
        font-weight: 700;
        color: ${(props) => props.theme['text-base']};
        background: ${(props) => props.theme['text-button']};
        padding: 0.188rem 0.563rem;
        border-radius: 999px;
    }

    .toDo_list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 0.75rem;
    }

    .emptyTasks {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        color: ${(props) => props.theme['text-button']};
        text-align: center;
    }

    .bx-clipboard {
        font-size: 50px;
        opacity: 0.3;
    }

    .emptyTasks p {
        font-weight: 700;
    }

`