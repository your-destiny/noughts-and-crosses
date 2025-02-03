import './style.css';
import { run } from './run';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="noughtsAndCrosses">
    <div class="noughtsAndCrossesInputDataWrapper">
      <div class="noughtsAndCrossesInputDataSelectWrapper">
        <label>Кто начнет игру</label>
        <select required class="noughtsAndCrossesInputDataSelect" name="noughtsAndCrossesSelect" id="first">
          <option value="X">Крестики</option>
          <option value="O">Нолики</option>
        </select>
      </div>
      <div class="noughtsAndCrossesInputDataInputWrapper">
        <label>Размерность поля</label>
        <select required class="noughtsAndCrossesInputDataSelect" name="noughtsAndCrossesSelect" id="size">
          <option value="2">2</option>
          <option selected="selected" value="3">3</option>
          <option value="4">4</option>
          <option value="5">4</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <button id="start" class="noughtsAndCrossesInputDataButton">Начать</button>
      <span class="noughtsAndCrossesResult" id='result'></span>
    </div>
    <div id='noughtsAndCrossesField' class="noughtsAndCrossesField">
    </div>
  </div>
`;

window.addEventListener('DOMContentLoaded', () => run());
