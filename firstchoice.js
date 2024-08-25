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
    }, 10); // 속도 조절
  } else if (typeof fnCallback === 'function') {
    fnCallback();
  }
}

function playSelectSound() {
  const audio = new Audio('select.mp3');
  audio.volume = 0.3; // 음량 30%
  audio
    .play()
    .then(() => {
      console.log('Sound played successfully');
    })
    .catch((error) => {
      console.error('Failed to play sound:', error);
    });
}

function chooseAdventure(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      '텍스트 어드벤처로 만들어진 홈페이지라니, 당신은 처음보는 홈페이지에 크게 놀랐다! <br>적어도 개발자는 만들면서 놀라고 있다! What a Awesome idea!';
  } else if (choice === 2) {
    storyText =
      '개발자의 이름, 개발자의 나이, 개발자가 좋아하는것... <br>통찰력이 뛰어난 당신은 단번에 이 홈페이지가 이 개발자를 소개하는 홈페이지라는 것을 파악했다.';
  } else if (choice === 3) {
    storyText =
      '왜 텍스트 어드벤쳐인지 곰곰히 생각한다. <br>아무래도 개발자는 예전에 폴더폰을 이용해 텍스트 어드벤처를 즐겨 했던 모양이다. <br>당신은 폴더폰이 뭔지 검색해보기로 했다.';
  } else if (choice === 4) {
    storyText =
      '당신은 개발자라고 쓰여진 방을 찾았다. 방문을 열고 들어가니 홈페이지 개발자에 대한 다양한 정보들이 있었다.';

    updateChoices([
      '가장 눈에 띄는 서류를 조사한다.',
      '개발자의 일기를 조사한다.',
      '개발자의 작품 상자를 조사한다.',
      '이 방에서는 더 얻을 정보가 없다. 다른 곳을 향해 조사를 계속한다.',
    ]);

    typeWriter(storyText, 0, function () {
      setSecondChoiceHandlers(); // script.js에서 정의된 핸들러 설정
      enableChoices(); // 선택지 활성화
    });

    return; // 선택지 업데이트 후 종료
  }

  typeWriter(storyText, 0, function () {
    console.log('First choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function setInitialChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      playSelectSound(); // 사운드 재생
      chooseAdventure(index + 1);
    };
  });
}

// 선택지 비활성화
function disableChoices() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'none';
  });
}

// 선택지 활성화
function enableChoices() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'auto';
  });
}

// 초기 핸들러 설정
document.addEventListener('DOMContentLoaded', function () {
  setInitialChoiceHandlers();
});
