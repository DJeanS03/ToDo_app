import styled from 'styled-components'

export const HeaderContainer = styled.header`
    .header {
        background: var(--gray-700);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
       /*  height: 12.5rem; */
        height: 8rem;
        weight: 100%
    }

    .logo {
        font-size: 2rem;
        font-weight: 900;
    }

    .icon {
        font-size: 3rem;
    }

    .before {
        color: #4ea8de;
    }

    .after {
        color: #5e60ce;
    }

    .taskForm {
        height: 3.375rem;
        width: 100%;
        max-width:46rem;
        padding: 0 1rem;
        display: flex;
        gap: .5rem;

        position: absolute;
        bottom: calc(-3.375rem / 2);
    }

    .taskForm input {
        width: 100%;
        flex: 1;
        padding: 0 1rem;
        background: var(--gray-500);
        color: var(--gray-100);
        font-size: 1rem;
        border: 1px solid var(--gray-700);
        border-radius: 8px;
    }

    .taskForm input::placeholder {
        color: var(--gray-300);
    }

    .taskForm button {
        background: var(--blue-dark);
        color: var(--gray-100);
        padding: 0 1rem;
        border-radius: 8px;
        border: none;
        display: flex;
        align-items: center;
        gap: .3rem;
        font-weight: 700;
    }

    .taskForm button i {
        font-size: 1.5rem;
    }
`