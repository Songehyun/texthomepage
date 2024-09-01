import { disableChoices } from '../assets/functions/disableChoices';
import { enableChoices } from '../assets/functions/enableChoices';
import { playSelectSound } from '../assets/functions/playSelectSound';
import { updateChoices } from '../assets/functions/updateChoices';
import { typeWriter } from './firstchoice';
import {
  companyStoryTexts,
  companyChoices,
  noticeChoices,
  publicDataChoices,
  noticeTexts,
  publicDataTexts,
} from '../assets/literal/SCompany';

export function handleCompanyChoice(): void {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  const storyText = companyStoryTexts.initial;

  updateChoices(companyChoices);

  typeWriter(storyText, 0, function () {
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyChoiceSelection(choice: number): void {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  let storyText: string | undefined;
  if (choice === 1) {
    storyText = companyStoryTexts.choice1;
  } else if (choice === 2) {
    storyText = companyStoryTexts.choice2;
  } else if (choice === 3) {
    storyText = companyStoryTexts.choice3;
  } else if (choice === 4) {
    storyText = companyStoryTexts.choice4;
  } else if (choice === 5) {
    handleCompanyNoticeChoice(); // 회사 공지 선택으로 이동
    return;
  }

  if (storyText) {
    typeWriter(storyText, 0, function () {
      console.log('Company choice typing complete.');
      enableChoices(); // 선택지 활성화
    });
  }
}

function handleCompanyNoticeChoice(): void {
  disableChoices(); // 선택지 비활성화

  const storyText = companyStoryTexts.notice;

  updateChoices(noticeChoices);

  typeWriter(storyText, 0, function () {
    setCompanyNoticeHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyNoticeSelection(choice: number): void {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  if (choice === 1) {
    showCompanyNotices();
  } else if (choice === 2) {
    showPublicData();
  } else if (choice === 3) {
    updateChoices(companyChoices);
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화

    const storyText = companyStoryTexts.backToCompany;
    typeWriter(storyText, 0, function () {
      console.log('Returned to original company choices.');
    });
    return;
  }
}

function showCompanyNotices(): void {
  updateChoices(noticeChoices);
  setNoticeHandlers('공지');
  enableChoices(); // 선택지 활성화
}

function showPublicData(): void {
  updateChoices(publicDataChoices);
  setNoticeHandlers('공시');
  enableChoices(); // 선택지 활성화
}

function setNoticeHandlers(type: string): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      playSelectSound(); // 사운드 재생
      handleNoticeSelection(type, index + 1);
    };
  });
}

function handleNoticeSelection(type: string, choice: number): void {
  disableChoices(); // 선택지 비활성화

  let storyText: string | undefined;
  if (type === '공지') {
    storyText = noticeTexts[choice - 1];
  } else if (type === '공시') {
    storyText = publicDataTexts[choice - 1];
  }

  if (choice === 5) {
    updateChoices(noticeChoices);
    setCompanyNoticeHandlers();
    enableChoices(); // 선택지 활성화

    storyText = companyStoryTexts.notice;
    typeWriter(storyText, 0, function () {
      console.log('Returned to company notices.');
    });
    return;
  }

  if (storyText) {
    typeWriter(storyText, 0, function () {
      console.log(`${type} choice ${choice} typing complete.`);
      enableChoices(); // 선택지 활성화
    });
  }
}

export function setCompanyChoiceHandlers(): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => handleCompanyChoiceSelection(index + 1);
  });
}

export function setCompanyNoticeHandlers(): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => handleCompanyNoticeSelection(index + 1);
  });
}
