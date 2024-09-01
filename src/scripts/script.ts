import { updateChoices } from '../assets/functions/updateChoices';
import { setInitialChoiceHandlers, typeWriter } from './firstchoice';
import { enableChoices } from '../assets/functions/enableChoices';
import { disableChoices } from '../assets/functions/disableChoices';
import { initialText, choicesText } from '../assets/literal/scriptliteral'; // 새로 추가된 import

function goToHome(): void {
  disableChoices(); // 선택지 비활성화

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
    window.typingTimeout = null;
  }

  updateChoices(choicesText);

  typeWriter(initialText, 0, function () {
    console.log('Returned to home.');
    setInitialChoiceHandlers(); // firstchoice.ts에서 정의된 핸들러 설정
    enableChoices(); // 선택지 활성화
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const homeButton = document.getElementById('home-button');
  if (homeButton) {
    homeButton.addEventListener('click', goToHome);
  }

  typeWriter(initialText, 0, function () {
    console.log('Initial typing complete.');
    setInitialChoiceHandlers(); // firstchoice.ts에서 정의된 핸들러 설정
    enableChoices(); // 선택지 활성화
  });
});
