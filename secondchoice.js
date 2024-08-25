function handleSecondChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      '당신은 서류를 집어들고 읽어보기로 했다.<br>이름:송이현<br>나이:30<br>좋아하는 음식:텐동<br>싫어하는 음식:신것, 매운것, 비린것<br>몸무게...당신은 더이상 개발자에 대하여 알고 싶지 않아졌기에 다른곳으로 눈을 돌렸다';
  } else if (choice === 2) {
    // 개발자의 일기를 조사하는 부분을 별도 파일로 분리
    handleDiaryChoice();
    return;
  } else if (choice === 3) {
    storyText =
      '개발자의 작품 상자에는 이 개발자가 만들었던 작품들이 담겨있다.<br>현재 상자 안은 비어있다. 하지만 당신은 비어있는 커다란 상자를 보고 무한한 가능성을 느꼈다!';
  } else if (choice === 4) {
    storyText =
      '당신은 " 만약 홈페이지 컨셉이 회사였다면" 이라는 문을 열고 들어갔다. <br>월급과 직장 상사의 냄새가 난다.';
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Second choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function setSecondChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => handleSecondChoice(index + 1);
  });
}
