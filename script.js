function typeWriter(text, i, fnCallback) {
  const storyTextElement = document.getElementById('story-text');

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
  }

  if (i < text.length) {
    storyTextElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    storyTextElement.blur();
    window.typingTimeout = setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 10);
  } else if (typeof fnCallback === 'function') {
    fnCallback();
  }
}

function updateChoices(newChoices) {
  const choiceElements = document.querySelectorAll('#adventure-container .choice');
  newChoices.forEach((choiceText, index) => {
    choiceElements[index].textContent = choiceText;
    choiceElements[index].style.display = 'block';
  });

  // 나머지 선택지 숨기기
  for (let i = newChoices.length; i < choiceElements.length; i++) {
    choiceElements[i].style.display = 'none';
  }

  // DOM이 제대로 업데이트 되었는지 확인
  console.log(document.querySelectorAll('#adventure-container .choice'));
}

function handleSecondChoice(choice) {
  let storyText;
  if (choice === 1) {
    storyText =
      '당신은 서류를 집어들고 읽어보기로 했다.<br>이름:송이현<br>나이:30<br>좋아하는 음식:텐동<br>싫어하는 음식:신것, 매운것, 비린것<br>몸무게...당신은 더이상 개발자에 대하여 알고 싶지 않아졌기에 다른곳으로 눈을 돌렸다';
  } else if (choice === 2) {
    storyText =
      '개발자의 일기를 조사한다. 당신은 일기를 읽기 시작했다. " 매일 기록하는건 중요하다" 일기에 첫 부분에 매번 적혀있다. <br>아무래도 이 개발자는 기록하는건 좋아하지만 굉장한 악필인 듯 하다.';

    // 스토리 텍스트 출력
    typeWriter(storyText, 0, function () {
      console.log('Diary story typing complete.');
    });

    // 새로운 선택지 설정
    updateChoices(['당신은 다음 페이지를 보기로 했다.', '당신은 일기를 덮고 다른 곳을 마저 조사하기로 했다.']);

    // 핸들러 설정
    setDiaryChoiceHandlers();
    return; // 선택지 업데이트 후 종료
  } else if (choice === 3) {
    storyText = '환경지켜';
  } else if (choice === 4) {
    storyText = '모두모여라';
  }

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
    window.typingTimeout = null;
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
    storyText = '조금 더 살펴보자';
  }

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
    window.typingTimeout = null;
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

// 홈 화면으로 돌아가는 기능 추가
function goToHome() {
  const storyText = document.getElementById('story-text');
  const initialText =
    '당신은 어떤 개발자를 소개하는 홈페이지에 들어왔다. 이것은 텍스트 어드벤처이다! <br> 아래의 선택지를 고르는 것으로 상호 작용이 가능한 것 같다';

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
    window.typingTimeout = null;
  }

  typeWriter(initialText, 0, function () {
    console.log('Returned to home.');
  });

  updateChoices([
    '무엇을 만들고 싶었던 것인지 전체적으로 살펴본다.',
    '뭘 하는 곳일까? 주변을 살펴본다.',
    '왜 텍스트 어드벤처인지 곰곰히 생각한다.',
    '여기에선 더이상 조사할 것이 없다. 더 깊은 곳으로 탐색을 시작했다.',
  ]);
  setInitialChoiceHandlers(); // firstchoice.js에서 정의된 핸들러 설정
}

// 초기 스토리 텍스트 출력
document.addEventListener('DOMContentLoaded', function () {
  const initialText =
    '당신은 어떤 개발자를 소개하는 홈페이지에 들어왔다. 이것은 텍스트 어드벤처이다! <br> 아래의 선택지를 고르는 것으로 상호 작용이 가능한 것 같다';
  typeWriter(initialText, 0, function () {
    console.log('Initial typing complete.');
  });

  setInitialChoiceHandlers(); // firstchoice.js에서 정의된 핸들러 설정
});
