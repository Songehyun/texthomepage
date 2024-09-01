import { disableChoices } from '../assets/functions/disableChoices';
import { enableChoices } from '../assets/functions/enableChoices';
import { playSelectSound } from '../assets/functions/playSelectSound';
import { typeWriter } from './firstchoice';
import { updateChoices } from '../assets/functions/updateChoices';
import { storyTexts, companyChoices } from '../assets/literal/Schoice';
import { handleDiaryChoice } from './secondchoiceDiary';
import { setCompanyChoiceHandlers } from './secondchoiceCompany';

export function handleSecondChoice(choice: number): void {
  disableChoices(); // 선택지 비활성화

  let storyText: string | undefined;
  if (choice === 1) {
    storyText = storyTexts.choice1;
  } else if (choice === 2) {
    handleDiaryChoice();
    return;
  } else if (choice === 3) {
    storyText = storyTexts.choice3;
  } else if (choice === 4) {
    handleCompanyChoice(); // 새로운 선택지를 처리하기 위해 `secondchoiceCompany.js`로 넘어감
    return;
  }

  if (storyText) {
    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      console.log('Second choice typing complete.');
      enableChoices(); // 선택지 활성화
    });
  }
}

function handleCompanyChoice(): void {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  const storyText = storyTexts.company;

  updateChoices(companyChoices);

  typeWriter(storyText, 0, function () {
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화
  });
}
