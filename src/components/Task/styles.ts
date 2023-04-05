import styled from 'styled-components'

type Props = {
  isCompleted: boolean
}

export const TaskContainer = styled.nav(({isCompleted}: Props) => (
  `
    .container {
        background: var(--gray-500);
        width: 100%;
        border: 1px solid var(--gray-400);
        padding: 1rem;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container .description {
        font-size: 0.875rem;
        line-height: 1.18rem;
        text-align: center;
        color: ${isCompleted ? 'var(--gray-300)' : 'var(--gray-100)'};
        transition: 0.4s;
        text-decoration: ${isCompleted ? 'line-through' : 'initial'}
    }


    .container .bx-trash {
        font-size: 1.25rem;
        color: var(--gray-300);
        transition: 0.2s
    }

    .container .bx-trash:hover {
        color: var(--danger);
    }


  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .checkbox-wrapper-13 input[type=checkbox] {
      --active: var(--purple);
      --active-inner: #fff;
      --focus: 2px rgba(39, 94, 254, .3);
      --border: #BBC1E1;
      --border-hover: var(--purple);
      --background: #fff;
      --disabled: #F6F8FF;
      --disabled-inner: #E1E6F9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      -webkit-transition: background 0.3s, border-color 0.3s, -webkit-box-shadow 0.2s;
      transition: background 0.3s, border-color 0.3s, -webkit-box-shadow 0.2s;
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
    }
    .checkbox-wrapper-13 input[type=checkbox]:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      -webkit-transition: opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);
      transition: opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);
    }
    .checkbox-wrapper-13 input[type=checkbox]:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }
    .checkbox-wrapper-13 input[type=checkbox]:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;
    }
    .checkbox-wrapper-13 input[type=checkbox]:disabled:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    .checkbox-wrapper-13 input[type=checkbox]:disabled + label {
      cursor: not-allowed;
    }
    .checkbox-wrapper-13 input[type=checkbox]:hover:not(:checked):not(:disabled) {
      --bc: var(--border-hover);
    }
    .checkbox-wrapper-13 input[type=checkbox]:focus {
      -webkit-box-shadow: 0 0 0 var(--focus);
              box-shadow: 0 0 0 var(--focus);
    }
    .checkbox-wrapper-13 input[type=checkbox]:not(.switch) {
      width: 21px;
    }
    .checkbox-wrapper-13 input[type=checkbox]:not(.switch):after {
      opacity: var(--o, 0);
    }
    .checkbox-wrapper-13 input[type=checkbox]:not(.switch):checked {
      --o: 1;
    }
    .checkbox-wrapper-13 input[type=checkbox] + label {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      margin-left: 4px;
    }

    .checkbox-wrapper-13 input[type=checkbox]:not(.switch) {
      border-radius: 7px;
    }
    .checkbox-wrapper-13 input[type=checkbox]:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      -webkit-transform: rotate(var(--r, 20deg));
          -ms-transform: rotate(var(--r, 20deg));
              transform: rotate(var(--r, 20deg));
    }
    .checkbox-wrapper-13 input[type=checkbox]:not(.switch):checked {
      --r: 43deg;
    }
  }

  .checkbox-wrapper-13 * {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  .checkbox-wrapper-13 *:before,
  .checkbox-wrapper-13 *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

`
))