let upchoice = () => [
  '가장 눈에 띄는 서류를 조사한다.',
  '개발자의 일기를 조사한다.',
  '개발자의 작품 상자를 조사한다.',
  '이 방에서는 더 얻을 정보가 없다.<br>다른 곳을 향해 조사를 계속한다.',
];

let closeD = (storyText = '당신은 일기를 덮고 다른 곳을 조사하기로 했다.<br>');

function resetToOriginalChoices(storyText) {
  updateChoices(upchoice());
  setSecondChoiceHandlers(); // 사운드 재생 호출 없음
  enableChoices(); // 선택지 활성화
  typeWriter(storyText, 0, function () {
    console.log('Returned to original diary choices.');
  });
}
function setDiaryPageHandlers(handlerFunction) {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      playSelectSound(); // 사운드 재생
      handlerFunction(index + 1);
    };
  });
}

function handleDiaryStep(storyText, nextHandler, choices) {
  disableChoices(); // 선택지 비활성화

  updateChoices(choices);
  setDiaryPageHandlers(nextHandler); // 사운드 재생은 선택지 클릭 시에만 발생
  enableChoices(); // 선택지 활성화

  typeWriter(storyText, 0, function () {
    console.log('Story text typing complete.');
  });
}

function handleDiaryChoice() {
  const storyText =
    '개발자의 일기를 조사한다.<br>당신은 일기를 읽기 시작했다.<br>"매일 기록하는건 중요하다"<br>일기에 첫 부분에 매번 적혀있다.<br>아무래도 이 개발자는 기록하는건 좋아하지만 굉장한 악필인 듯 하다.';
  handleDiaryStep(storyText, handleDiaryNextChoice, [
    '당신은 다음 페이지를 보기로 했다.',
    '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.',
  ]);
}

function handleDiaryNextChoice(choice) {
  if (choice === 1) {
    const storyText =
      '개발자의 하루 일정이 빼곡하게 적혀있다.<br>아무래도 이 개발자는 캘린더의 대용으로 일기를 사용하는 모양이다.';
    handleDiaryStep(storyText, handleDiaryNextPageChoice, [
      '당신은 계속 페이지를 넘겼다.',
      '당신은 충분히 많이 읽었다.',
    ]);
  } else if (choice === 2) {
    closeD;
    resetToOriginalChoices(storyText); // 이곳에서도 playSelectSound 호출 없음
  }
}

function handleDiaryNextPageChoice(choice) {
  if (choice === 1) {
    const storyText =
      '이 개발자는 아무리 바쁜일이 있어도 수면 시간을 줄일 생각이 없는 모양이다.<br>수면 시간을 줄이게 하기 위해서는 돈이 필요할 것 같다..';
    handleDiaryStep(storyText, handleDiaryThirdPageChoice, [
      '당신은 물질만능주의를 느끼며 페이지를 넘겼다.',
      '당신은 충분히 많이 읽었다.',
    ]);
  } else if (choice === 2) {
    closeD;
    resetToOriginalChoices(storyText); // 이곳에서도 playSelectSound 호출 없음
  }
}

function handleDiaryThirdPageChoice(choice) {
  if (choice === 1) {
    const storyText = '"나는 오늘 친구들과 놀았다 재밌었다"<br>아무래도 이날 개발자에게 무슨 일이 있었던 것 같다.';
    handleDiaryStep(storyText, handleDiaryFourthPageChoice, [
      '당신은 의문을 안고 페이지를 넘겼다.',
      '당신은 이제 그만 일기를 덮기로 했다.',
    ]);
  } else if (choice === 2) {
    closeD;
    resetToOriginalChoices(storyText); // 이곳에서도 playSelectSound 호출 없음
  }
}

function handleDiaryFourthPageChoice(choice) {
  if (choice === 1) {
    const storyText = '이 일기는 여기가 마지막 페이지 인 것 같다.<br>개발자가 일기를 꾸준히 쓴다면 더 늘어날까?';
    handleDiaryStep(storyText, handleDiaryFinalPageChoice, [
      '다음 페이지는 없지만 당신은 일기를 덮고 일기 뒷면을 보기로 했다.',
      '당신은 일기 뒷면에는 관심이 없다.',
    ]);
  } else if (choice === 2) {
    closeD;
    resetToOriginalChoices(storyText); // 이곳에서도 playSelectSound 호출 없음
  }
}

function handleDiaryFinalPageChoice(choice) {
  if (choice === 1) {
    const storyText =
      '글귀가 적혀있다.<br>당신은 개발자의 일기를 전부 읽었다.<br>업적 : 남의 일기는 읽으면 안돼 를 획득했다';
    resetToOriginalChoices(storyText); // 이곳에서도 playSelectSound 호출 없음
  } else if (choice === 2) {
    closeD;
    resetToOriginalChoices(storyText); // 이곳에서도 playSelectSound 호출 없음
  }
}
