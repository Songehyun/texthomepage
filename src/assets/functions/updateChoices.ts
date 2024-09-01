import { playSelectSound } from './playSelectSound';
import { chooseAdventure } from '../../scripts/firstchoice';

export function updateChoices(newChoices: string[]): void {
  const choiceElements = document.querySelectorAll<HTMLDivElement>('.choice');

  newChoices.forEach((choiceText, index) => {
    if (choiceElements[index]) {
      choiceElements[index].textContent = choiceText;
      choiceElements[index].style.display = 'block';
    } else {
      // 동적으로 선택지 추가
      const newChoiceElement = document.createElement('div');
      newChoiceElement.classList.add('choice');
      newChoiceElement.textContent = choiceText;
      newChoiceElement.style.display = 'block';
      newChoiceElement.onclick = () => {
        playSelectSound(); // 사운드 재생
        chooseAdventure(index + 1);
      };
      document.getElementById('adventure-container')?.appendChild(newChoiceElement);
    }
  });

  // 나머지 선택지 숨기기
  for (let i = newChoices.length; i < choiceElements.length; i++) {
    choiceElements[i].style.display = 'none';
  }
}
