import { css } from "styled-components";

export default css`
  /* animated checkbox */

  $duration: 0.8s;
  $duration2: 0.875s;

  .todo {
    display: block;
    position: relative;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
  }

  .todo__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    width: 100%;
    height: auto;
    margin: auto;

    fill: none;
    stroke: #27fdc7;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .todo__box,
  .todo__check {
    transition: stroke-dashoffset $duration cubic-bezier(0.9, 0, 0.5, 1);
  }

  .todo__line {
    transition: stroke-dashoffset $duration2 cubic-bezier(0.9, 0, 0.5, 1);
  }

  .todo__circle {
    stroke: #27fdc7;
    stroke-dasharray: 1 6;
    stroke-width: 0;

    transform-origin: 13.5px 12.5px;
    transform: scale(0.4) rotate(0deg);
    animation: none $duration linear; //cubic-bezier(.08,.56,.04,.98);

    @keyframes explode {
      //0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); }
      30% {
        stroke-width: 3;
        stroke-opacity: 1;
        transform: scale(0.8) rotate(40deg);
        //animation-timing-function: cubic-bezier(.89,.01,.95,.51);
      }
      100% {
        stroke-width: 0;
        stroke-opacity: 0;
        transform: scale(1.1) rotate(60deg);
        //animation-timing-function: cubic-bezier(.08,.56,.04,.98);
      }
    }
  }

  .todo__box {
    stroke-dasharray: 80, 160;
    stroke-dashoffset: 0;
    transition-delay: $duration * 0.2;
  }
  .todo__check {
    stroke: #27fdc7;
    stroke-dasharray: 9.8995, 9.8995;
    stroke-dashoffset: 9.8995;
    transition-duration: $duration * 0.4;
  }
  .todo__line {
    stroke-dasharray: 168, 1684;
    stroke-dashoffset: 168;
  }
  .todo__circle {
    animation-delay: $duration * 0.7;
    animation-duration: $duration * 0.7;
  }
`;
