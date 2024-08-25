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
    storyText = '이것은 다음페이지';
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

function setDiaryChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryNextChoice(1);
  choices[1].onclick = () => handleDiaryNextChoice(2);
}
