function handleDiaryChoice() {
  disableChoices(); // 선택지 비활성화

  const storyText =
    '개발자의 일기를 조사한다. 당신은 일기를 읽기 시작했다. <br>"매일 기록하는건 중요하다" 일기에 첫 부분에 매번 적혀있다. <br>아무래도 이 개발자는 기록하는건 좋아하지만 굉장한 악필인 듯 하다.';

  // 선택지 업데이트
  updateChoices(['당신은 다음 페이지를 보기로 했다.', '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.']);

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    setDiaryChoiceHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleDiaryNextChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      '개발자의 하루 일정이 빼곡하게 적혀있다.<br>아무래도 이 개발자는 캘린더의 대용으로 일기를 사용하는 모양이다.';

    // 선택지 업데이트
    updateChoices(['당신은 계속 페이지를 넘겼다.', '당신은 충분히 많이 읽었다.']);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setDiaryNextPageHandlers();
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  } else if (choice === 2) {
    storyText = '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.';

    // 선택지 업데이트
    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // 기존 핸들러를 재설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Diary choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function handleDiaryNextPageChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      '이 개발자는 아무리 바쁜일이 있어도 수면 시간을 줄일 생각이 없는 모양이다.<br>수면 시간을 줄이게 하기 위해서는 돈이 필요할 것 같다..';

    // 선택지 업데이트
    updateChoices(['당신은 물질만능주의를 느끼며 페이지를 넘겼다.', '당신은 충분히 많이 읽었다.']);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setDiaryThirdPageHandlers(); // 세 번째 페이지에 대한 핸들러 설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  } else if (choice === 2) {
    storyText = '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.';

    // 선택지 업데이트
    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // 기존 핸들러를 재설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Diary next page choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function handleDiaryThirdPageChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText = '" 나는 오늘 친구들과 놀았다 재밌었다" <br>아무래도 이날 개발자에게 무슨 일이 있었던 것 같다.';

    // 선택지 업데이트
    updateChoices(['당신은 의문을 안고 페이지를 넘겼다.', '당신은 이제 그만 일기를 덮기로 했다.']);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setDiaryFourthPageHandlers(); // 네 번째 페이지에 대한 핸들러 설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  } else if (choice === 2) {
    storyText = '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.';

    // 선택지 업데이트
    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // 기존 핸들러를 재설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Diary third page choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function handleDiaryFourthPageChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText = '이 일기는 여기가 마지막 페이지 인 것 같다. <br>개발자가 일기를 꾸준히 쓴다면 더 늘어날까?';

    // 선택지 업데이트
    updateChoices([
      '다음 페이지는 없지만 당신은 일기를 덮고 일기 뒷면을 보기로 했다.',
      '당신은 일기 뒷면에는 관심이 없다.',
    ]);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setDiaryFinalPageHandlers(); // 마지막 페이지에 대한 핸들러 설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  } else if (choice === 2) {
    storyText = '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.';

    // 선택지 업데이트
    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // 기존 핸들러를 재설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Diary fourth page choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function handleDiaryFinalPageChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      '글귀가 적혀있다. <br>당신은 개발자의 일기를 전부 읽었다.<br>업적 : 남의 일기는 읽으면 안돼 를 획득했다';

    // 대사 출력 후 이전 선택지로 돌아감
    typeWriter(storyText, 0, function () {
      updateChoices([
        '가장 눈에 띄는 서류를 조사한다.',
        '개발자의 일기를 조사한다.',
        '개발자의 작품 상자를 조사한다.',
        '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
      ]);

      setSecondChoiceHandlers(); // 기존 핸들러를 재설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  } else if (choice === 2) {
    storyText = '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.';

    // 선택지 업데이트
    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    // 대사 출력 후 핸들러 설정
    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // 기존 핸들러를 재설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Diary final page choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function setDiaryChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryNextChoice(1);
  choices[1].onclick = () => handleDiaryNextChoice(2);
}

function setDiaryNextPageHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryNextPageChoice(1);
  choices[1].onclick = () => handleDiaryNextPageChoice(2);
}

function setDiaryThirdPageHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryThirdPageChoice(1);
  choices[1].onclick = () => handleDiaryThirdPageChoice(2);
}

function setDiaryFourthPageHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryFourthPageChoice(1);
  choices[1].onclick = () => handleDiaryFourthPageChoice(2);
}

function setDiaryFinalPageHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryFinalPageChoice(1);
  choices[1].onclick = () => handleDiaryFinalPageChoice(2);
}
