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
    }, 10); // 글자가 출력되는 속도 조정 (50ms마다 한 글자씩 출력)
  } else if (typeof fnCallback === 'function') {
    setTimeout(fnCallback, 700); // 다음 액션으로 넘어가기 전에 약간의 지연
  }
}

function chooseAdventure(direction) {
  let storyText;
  if (direction === 'north') {
    storyText = 'You venture deeper into the forest, hearing strange noises.';
  } else if (direction === 'south') {
    storyText = 'You find a small village at the edge of the forest.';
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

// 초기 스토리 텍스트 출력
document.addEventListener('DOMContentLoaded', function () {
  const initialText = 'You are standing in a dark forest. Which direction will you go?';
  typeWriter(initialText, 0, function () {
    console.log('Initial typing complete.');
  });
});
