function handleSecondChoice(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      '당신은 서류를 집어들고 읽어보기로 했다.<br>이름:송이현<br>나이:30<br>좋아하는 음식:텐동<br>싫어하는 음식:신것, 매운것, 비린것<br>당신은 더이상 개발자에 대하여 알고 싶지 않아졌기에 다른곳으로 눈을 돌렸다';
  } else if (choice === 2) {
    handleDiaryChoice();
    return;
  } else if (choice === 3) {
    storyText =
      '개발자의 작품 상자에는 이 개발자가 만들었던 작품들이 담겨있다.<br>현재 상자 안은 비어있다. 하지만 당신은 비어있는 커다란 상자를 보고 무한한 가능성을 느꼈다!';
  } else if (choice === 4) {
    handleCompanyChoice(); // 새로운 선택지를 처리하기 위해 `secondchoiceCompany.js`로 넘어감
    return; // 사운드 재생은 handleCompanyChoice에서 처리
  }

  // 대사 출력 후 핸들러 설정
  typeWriter(storyText, 0, function () {
    console.log('Second choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyChoice() {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  const storyText = '당신은 "소개 주체가 회사였다면" 이라는 문을 열고 들어갔다.<br>야근과 거짓말의 냄새가 난다.';

  updateChoices(['EH 회사 간단소개', '회사원의 삶', '회사의 새로운소식', '회사에서 만든 작품', '회사 공지']);

  typeWriter(storyText, 0, function () {
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function setSecondChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      if (index + 1 !== 4) {
        playSelectSound(); // 4번 선택지가 아닌 경우에만 사운드 재생
      }
      handleSecondChoice(index + 1);
    };
  });
}
