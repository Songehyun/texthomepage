function handleSecondChoice(choice) {
  let storyText;
  if (choice === 1) {
    storyText =
      '당신은 서류를 집어들고 읽어보기로 했다.<br>이름:송이현<br>나이:30<br>좋아하는 음식:텐동<br>싫어하는 음식:신것, 매운것, 비린것<br>몸무게...당신은 더이상 개발자에 대하여 알고 싶지 않아졌기에 다른곳으로 눈을 돌렸다';
  } else if (choice === 2) {
    storyText =
      '개발자의 일기를 조사한다. 당신은 일기를 읽기 시작했다. "매일 기록하는건 중요하다" 일기에 첫 부분에 매번 적혀있다. <br>아무래도 이 개발자는 기록하는건 좋아하지만 굉장한 악필인 듯 하다.';

    typeWriter(storyText, 0, function () {
      updateChoices(['당신은 다음 페이지를 보기로 했다.', '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.']);

      setDiaryChoiceHandlers();
    });

    return;
  } else if (choice === 3) {
    storyText = '환경지켜';
  } else if (choice === 4) {
    storyText = '모두모여라';
  }

  typeWriter(storyText, 0, function () {
    console.log('Second choice typing complete.');
  });
}

function handleDiaryChoice(choice) {
  let storyText;
  if (choice === 1) {
    storyText = '이것은 다음페이지';
  } else if (choice === 2) {
    storyText = '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.';

    typeWriter(storyText, 0, function () {
      console.log('Returning to original choices.');

      updateChoices([
        '가장 눈에 띄는 서류를 조사한다.',
        '개발자의 일기를 조사한다.',
        '개발자의 작품 상자를 조사한다.',
        '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
      ]);

      setSecondChoiceHandlers();
    });

    return;
  }

  typeWriter(storyText, 0, function () {
    console.log('Diary choice typing complete.');
  });
}

function setSecondChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => handleSecondChoice(index + 1);
  });
}

function setDiaryChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices[0].onclick = () => handleDiaryChoice(1);
  choices[1].onclick = () => handleDiaryChoice(2);
}
