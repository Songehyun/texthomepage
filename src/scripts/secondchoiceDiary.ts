import { updateChoices } from '../assets/functions/updateChoices';
import { setSecondChoiceHandlers } from '../assets/functions/setSecondChoiceHandlers';
import { enableChoices } from '../assets/functions/enableChoices';
import { playSelectSound } from '../assets/functions/playSelectSound';
import { disableChoices } from '../assets/functions/disableChoices';
import { typeWriter } from './firstchoice';
import { upChoice, closeDText, storyTexts, diaryChoices } from '../assets/literal/SDiary'; // 리터럴 값 import

// 공통 선택지 세트를 변수로 저장
const upchoice = (): string[] => upChoice;

const closeD = (storyText: string = closeDText) => {
  resetToOriginalChoices(storyText);
};

// 공통 선택지 복원 함수
function resetToOriginalChoices(storyText: string): void {
  updateChoices(upchoice());
  setSecondChoiceHandlers(); // 사운드 재생 호출 없음
  enableChoices(); // 선택지 활성화
  typeWriter(storyText, 0, function () {
    console.log('Returned to original diary choices.');
  });
}

function setDiaryPageHandlers(handlerFunction: (choice: number) => void): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');

  choices.forEach((choice: HTMLDivElement, index: number) => {
    console.log(`Setting handler for choice ${index + 1}`);
    choice.onclick = () => {
      playSelectSound(); // 사운드 재생
      console.log(`Choice ${index + 1} clicked`);
      handlerFunction(index + 1);
    };
  });
}

function handleDiaryStep(storyText: string, nextHandler: (choice: number) => void, choices: string[]): void {
  disableChoices(); // 선택지 비활성화

  // 선택지 업데이트 및 핸들러 설정
  updateChoices(choices);
  setDiaryPageHandlers(nextHandler); // 사운드 재생은 선택지 클릭 시에만 발생
  enableChoices(); // 선택지 활성화

  // 대사 출력
  typeWriter(storyText, 0, function () {
    console.log('Story text typing complete.');
  });
}

export function handleDiaryChoice(): void {
  handleDiaryStep(storyTexts.initial, handleDiaryNextChoice, diaryChoices.firstPage);
}

function handleDiaryNextChoice(choice: number): void {
  if (choice === 1) {
    handleDiaryStep(storyTexts.choice1, handleDiaryNextPageChoice, diaryChoices.secondPage);
  } else if (choice === 2) {
    closeD();
  }
}

function handleDiaryNextPageChoice(choice: number): void {
  if (choice === 1) {
    handleDiaryStep(storyTexts.choice2, handleDiaryThirdPageChoice, diaryChoices.thirdPage);
  } else if (choice === 2) {
    closeD();
  }
}

function handleDiaryThirdPageChoice(choice: number): void {
  if (choice === 1) {
    handleDiaryStep(storyTexts.choice3, handleDiaryFourthPageChoice, diaryChoices.fourthPage);
  } else if (choice === 2) {
    closeD();
  }
}

function handleDiaryFourthPageChoice(choice: number): void {
  if (choice === 1) {
    handleDiaryStep(storyTexts.choice4, handleDiaryFinalPageChoice, diaryChoices.finalPage);
  } else if (choice === 2) {
    closeD();
  }
}

function handleDiaryFinalPageChoice(choice: number): void {
  if (choice === 1) {
    resetToOriginalChoices(storyTexts.final);
  } else if (choice === 2) {
    closeD();
  }
}
