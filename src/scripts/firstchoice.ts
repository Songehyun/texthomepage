import { storyTexts, choiceOptions } from '../assets/literal/Fchoices';
import { playSelectSound } from '../assets/functions/playSelectSound';
import { disableChoices } from '../assets/functions/disableChoices';
import { enableChoices } from '../assets/functions/enableChoices';
import { updateChoices } from '../assets/functions/updateChoices';
import { setSecondChoiceHandlers } from '../assets/functions/setSecondChoiceHandlers';

export function typeWriter(text: string, i: number, fnCallback?: () => void): void {
  const storyTextElement = document.getElementById('story-text');

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
  }

  if (i < text.length) {
    storyTextElement!.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    storyTextElement!.blur();
    (window as any).typingTimeout = setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 10) as unknown as number; // 속도 조절
  } else if (fnCallback) {
    fnCallback();
  }
}

export function chooseAdventure(choice: number): void {
  disableChoices(); // 선택지 비활성화

  let storyText: string | undefined;

  if (choice === 1) {
    storyText = storyTexts.choice1;
  } else if (choice === 2) {
    storyText = storyTexts.choice2;
  } else if (choice === 3) {
    storyText = storyTexts.choice3;
  } else if (choice === 4) {
    storyText = storyTexts.choice4;

    updateChoices(choiceOptions);

    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // script.js에서 정의된 핸들러 설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  if (storyText) {
    typeWriter(storyText, 0, function () {
      console.log('First choice typing complete.');
      enableChoices(); // 선택지 활성화
    });
  }
}

export function setInitialChoiceHandlers(): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      playSelectSound(); // 사운드 재생
      chooseAdventure(index + 1);
    };
  });
}

// 초기 핸들러 설정
document.addEventListener('DOMContentLoaded', function () {
  setInitialChoiceHandlers();
});
