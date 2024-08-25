function updateChoices(newChoices) {
  const choiceElements = document.querySelectorAll('.choice');

  newChoices.forEach((choiceText, index) => {
    if (choiceElements[index]) {
      choiceElements[index].textContent = choiceText;
      choiceElements[index].style.display = 'block';
    } else {
      const newChoiceElement = document.createElement('div');
      newChoiceElement.classList.add('choice');
      newChoiceElement.textContent = choiceText;
      newChoiceElement.style.display = 'block';
      newChoiceElement.onclick = () => {
        playSelectSound(); // 사운드 재생
        chooseAdventure(index + 1);
      };
      document.getElementById('adventure-container').appendChild(newChoiceElement);
    }
  });

  for (let i = newChoices.length; i < choiceElements.length; i++) {
    choiceElements[i].style.display = 'none';
  }
}

function goToHome() {
  disableChoices(); // 선택지 비활성화

  const storyText = document.getElementById('story-text');
  const initialText =
    '당신은 어떤 개발자를 소개하는 홈페이지에 들어왔다.<br>이것은 텍스트 어드벤처이다!<br>아래의 선택지를 고르는 것으로<br>상호 작용이 가능한 것 같다';

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
    window.typingTimeout = null;
  }

  updateChoices([
    '무엇을 만들고 싶었던 것인지 전체적으로 살펴본다.',
    '뭘 하는 곳일까?<br>주변을 살펴본다.',
    '왜 텍스트 어드벤처인지 곰곰히 생각한다.',
    '여기에선 더이상 조사할 것이 없다.<br>더 깊은 곳으로 탐색을 시작했다.',
  ]);

  typeWriter(initialText, 0, function () {
    console.log('Returned to home.');
    setInitialChoiceHandlers(); // firstchoice.js에서 정의된 핸들러 설정
    enableChoices(); // 선택지 활성화
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const initialText =
    '당신은 어떤 개발자를 소개하는 홈페이지에 들어왔다.<br>이것은 텍스트 어드벤처이다!<br>아래의 선택지를 고르는 것으로<br>상호 작용이 가능한 것 같다';

  typeWriter(initialText, 0, function () {
    console.log('Initial typing complete.');
    setInitialChoiceHandlers(); // firstchoice.js에서 정의된 핸들러 설정
    enableChoices(); // 선택지 활성화
  });
});
