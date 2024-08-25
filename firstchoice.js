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

function chooseAdventure(choice) {
  let storyText;
  if (choice === 1) {
    storyText =
      '텍스트 어드벤처로 만들어진 홈페이지라니, 당신은 처음보는 홈페이지에 크게 놀랐다! <br>적어도 개발자는 만들면서 놀라고 있다! What a Awesome idea!';
  } else if (choice === 2) {
    storyText =
      '개발자의 이름, 개발자의 나이, 개발자가 좋아하는것... <br>통찰력이 뛰어난 당신은 단번에 이 홈페이지가 이 개발자를 소개하는 홈페이지라는 것을 파악했다.';
  } else if (choice === 3) {
    storyText =
      '왜 텍스트 어드벤쳐인지 곰곰히 생각한다. 아무래도 개발자는 예전에 폴더폰을 이용해 텍스트 어드벤처를 즐겨 했던 모양이다. <br>당신은 폴더폰이 뭔지 검색해보기로 했다.';
  } else if (choice === 4) {
    storyText =
      '당신은 개발자라고 쓰여진 방을 찾았다. 방문을 열고 들어가니 홈페이지 개발자에 대한 다양한 정보들이 있었다.';

    // 새로운 선택지 설정
    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    // setSecondChoiceHandlers를 호출하기 전에 storyText 출력
    typeWriter(storyText, 0, function () {
      console.log('Choice 4 typing complete.');
    });

    setSecondChoiceHandlers(); // script.js에서 정의된 핸들러 설정
    return; // 선택지 업데이트 후 종료
  }

  if (window.typingTimeout) {
    clearTimeout(window.typingTimeout);
    window.typingTimeout = null;
  }

  typeWriter(storyText, 0, function () {
    console.log('First choice typing complete.');
  });
}

function setInitialChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => chooseAdventure(index + 1);
  });
}
// 초기 핸들러 설정
document.addEventListener('DOMContentLoaded', function () {
  setInitialChoiceHandlers();
});

console.log(document.querySelectorAll('#adventure-container .choice'));
