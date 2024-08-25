let typingTimeout = null; // 전역 변수로 typingTimeout을 초기화

function typeWriter(text, i, fnCallback) {
  const storyTextElement = document.getElementById('story-text');

  // 기존 타이핑이 진행 중이면 중단
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }

  if (i < text.length) {
    storyTextElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    // 포커스 제거
    storyTextElement.blur();

    // 현재 타이핑 진행 중인 타임아웃을 저장
    typingTimeout = setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 10); // 글자가 출력되는 속도 조정 (10ms마다 한 글자씩 출력)
  } else if (typeof fnCallback === 'function') {
    setTimeout(fnCallback, 700); // 다음 액션으로 넘어가기 전에 약간의 지연
  }
}

function chooseAdventure(direction) {
  let storyText;
  if (direction === 'north') {
    storyText = '선택1을 골라버렸다';
  } else if (direction === 'south') {
    storyText = '선택2를 해버렸다';
  }

  // 기존 타이핑이 진행 중이면 중단
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }

  // 타이핑 효과로 스토리 텍스트 출력
  typeWriter(storyText, 0, function () {
    console.log('Typing complete.');
  });
}

// 홈 화면으로 돌아가는 기능 추가
function goToHome() {
  const storyText = document.getElementById('story-text');
  const initialText =
    '당신은 송이현의 회사를 소개하는 홈페이지에 들어왔다. 이것은 텍스트 어드벤처이다! <br> 아래의 선택지를 고르는 것으로 상호 작용이 가능한 것 같다';

  // 기존 타이핑이 진행 중이면 중단
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }

  // 홈 화면의 초기 텍스트를 타이핑 효과로 출력
  typeWriter(initialText, 0, function () {
    console.log('Returned to home.');
  });
}

// 초기 스토리 텍스트 출력
document.addEventListener('DOMContentLoaded', function () {
  const initialText =
    '당신은 송이현의 회사를 소개하는 홈페이지에 들어왔다. 이것은 텍스트 어드벤처이다! <br> 아래의 선택지를 고르는 것으로 상호 작용이 가능한 것 같다';
  typeWriter(initialText, 0, function () {
    console.log('Initial typing complete.');
  });
});
