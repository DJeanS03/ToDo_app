import styled from 'styled-components'

export const HeaderContainer = styled.header`
    .header {
        background: ${(props) => props.theme['shape-primary']};
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 8rem;
        width: 100%;

        transition: background 0.5s;
    }

    .logo {
        font-size: 2rem;
        font-weight: 900;
    }

    .icon {
        font-size: 3rem;
    }

    .before {
        color: ${(props) => props.theme['before']};
    }

    .after {
        color: ${(props) => props.theme['after']};
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
        background: ${(props) => props.theme['shape-secondary']};
        color: ${(props) => props.theme['text-title']};
        font-size: 1rem;
        border: 1px solid ${(props) => props.theme['shape-primary']};
        border-radius: 8px;
    }

    .taskForm input::placeholder {
        color: ${(props) => props.theme['placeholder']};
    }

    .taskForm button {
        background: ${(props) => props.theme['blue']};
        color: ${(props) => props.theme['text-title']};
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

    .themeSwitch {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
    }    

        /* The switch - the box around the slider */
    .switch {
    /* Variables */
    --switch_width: 2em;
    --switch_height: 1em;
    --thumb_color: #e8e8e8;
    --track_color: #e8e8e8;
    --track_active_color: #888;
    --outline_color: #000;
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: var(--switch_width);
    height: var(--switch_height);
    rotate: calc(90deg);
    }

    /* Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .slider {
    box-sizing: border-box;
    border: 2px solid var(--outline_color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--track_color);
    transition: .15s;
    border-radius: var(--switch_height);
    }

    .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: var(--switch_height);
    width: var(--switch_height);
    border: 2px solid var(--outline_color);
    border-radius: 100%;
    left: -2px;
    bottom: -2px;
    background-color: var(--thumb_color);
    transform: translateY(-0.2em);
    box-shadow: 0 0.2em 0 var(--outline_color);
    transition: .15s;
    }

    input:checked + .slider {
    background-color: var(--track_active_color);
    }

    input:focus-visible + .slider {
    box-shadow: 0 0 0 2px var(--track_active_color);
    }

    /* Raise thumb when hovered */
    input:hover + .slider:before {
    transform: translateY(-0.3em);
    box-shadow: 0 0.3em 0 var(--outline_color);
    }

    input:checked + .slider:before {
    transform: translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.2em);
    }

    /* Raise thumb when hovered & checked */
    input:hover:checked + .slider:before {
    transform: translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.3em);
    box-shadow: 0 0.3em 0 var(--outline_color);
    }
    `