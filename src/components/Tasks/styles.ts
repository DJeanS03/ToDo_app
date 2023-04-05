import styled from 'styled-components'

export const TasksContainer = styled.nav`
    
    width: 100%;
    max-width: 46rem;
    margin 0 auto;
    margin-top: 5.625rem;
    padding 0 1rem;

    .header {
      display: flex; 
      align-items: center;
      justify-content: space-between;
      margin-top : 1.5rem;
    }
    
    .header div {
        display: flex;
        align-itens: center;
        gap: 0.8rem;
    }

    .header p {
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--blue);
    }
    
    .header p.completedTasks {
        color: var(--purple);
    }

    .header span {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--gray-200);
        background: var(--gray-400);
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
        /* justify-content: center: */
        flex-direction: column;
        gap: 1rem;
        color: var(--gray-300);
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