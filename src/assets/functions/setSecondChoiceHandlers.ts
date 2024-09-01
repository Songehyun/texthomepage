import { playSelectSound } from './playSelectSound';
import { handleSecondChoice } from '../../scripts/secondchoice';

export function setSecondChoiceHandlers(): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      if (index + 1 !== 4) {
        playSelectSound(); // 4번 선택지가 아닌 경우에만 사운드 재생
      }
      handleSecondChoice(index + 1);
    };
  });
}
