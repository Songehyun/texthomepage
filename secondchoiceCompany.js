function handleCompanyChoice() {
  disableChoices(); // 선택지 비활성화

  const storyText =
    '당신은 "만약 홈페이지 컨셉이 회사였다면" 이라는 문을 열고 들어갔다. <br>월급과 직장 상사의 냄새가 난다.';

  updateChoices(['회사간단소개', '회사원의삶', '회사의새로운소식', '회사에서만든작품', '회사공지']);

  typeWriter(storyText, 0, function () {
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyChoiceSelection(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText = '간단소개입니다';
  } else if (choice === 2) {
    storyText = '이게 삶이다';
  } else if (choice === 3) {
    storyText = '이게 소식이다';
  } else if (choice === 4) {
    storyText = '이게 작품이다';
  } else if (choice === 5) {
    handleCompanyNoticeChoice(); // 회사 공지 선택으로 이동
    return;
  }

  typeWriter(storyText, 0, function () {
    console.log('Company choice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyNoticeChoice() {
  disableChoices(); // 선택지 비활성화

  const storyText = '여기서 회사 공지와 공고를 볼 수 있어';

  updateChoices(['회사공지', '공시자료']);

  typeWriter(storyText, 0, function () {
    setCompanyNoticeHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyNoticeSelection(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText = '이게 회사공지야';
  } else if (choice === 2) {
    storyText = '이게 공시자료야';
  }

  typeWriter(storyText, 0, function () {
    console.log('Company notice typing complete.');
    enableChoices(); // 선택지 활성화
  });
}

function setCompanyChoiceHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => handleCompanyChoiceSelection(index + 1);
  });
}

function setCompanyNoticeHandlers() {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => handleCompanyNoticeSelection(index + 1);
  });
}
