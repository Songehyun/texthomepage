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

function handleCompanyChoiceSelection(choice) {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  let storyText;
  if (choice === 1) {
    storyText =
      'EH 회사는 3 대째 내려오는 전통있는 회사로, 대한민국의 발전을 위해서 여기 다 적을 수 없을 정도의 엄청난 업적을 세웠고 회사 복지로는 주 2 일제이며 사원들의 급여는 평균과 비교하지 못할 정도로 많습니다.<br>어쨋든 대단한 회사입니다.';
  } else if (choice === 2) {
    storyText =
      'EH 회사원은 원하는 시간에 출근해서 하루 6 시간의 업무 시간을 채우고 퇴근합니다.<br>회사원 : " 이 회사가 정말 대단하다!" ';
  } else if (choice === 3) {
    storyText = '새로운 소식으로 EH 회사가 초전도체를 개발했다는 소식입니다.<br>정말 대단하네요!';
  } else if (choice === 4) {
    storyText = '초전도체 개발, 우주 여행 가능한 유인 우주선 개발, 하늘을 나는 친환경 자동차 개발';
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

  const storyText = '회사 공지 및 공시자료';

  updateChoices(['회사공지', '공시자료', '돌아가기']);

  typeWriter(storyText, 0, function () {
    setCompanyNoticeHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyNoticeSelection(choice) {
  disableChoices(); // 선택지 비활성화
  playSelectSound(); // 사운드 재생

  if (choice === 1) {
    showCompanyNotices();
  } else if (choice === 2) {
    showPublicData();
  } else if (choice === 3) {
    // 선택지와 핸들러를 먼저 설정하고 대사를 출력
    updateChoices(['EH 회사 간단소개', '회사원의 삶', '회사의 새로운소식', '회사에서 만든 작품', '회사 공지']);
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화

    const storyText = '뒤에서 직장 상사가 다가왔다.<br>당신은 화면을 넷플릭스로 전환했다.';
    typeWriter(storyText, 0, function () {
      console.log('Returned to original company choices.');
    });
    return;
  }
}

function showCompanyNotices() {
  updateChoices(['공지 1', '공지 2', '공지 3', '공지 4', '돌아가기']);
  setNoticeHandlers('공지');
  enableChoices(); // 선택지 활성화
}

function showPublicData() {
  updateChoices(['공시 1', '공시 2', '공시 3', '공시 4', '돌아가기']);
  setNoticeHandlers('공시');
  enableChoices(); // 선택지 활성화
}

function setNoticeHandlers(type) {
  const choices = document.querySelectorAll('#adventure-container .choice');
  choices.forEach((choice, index) => {
    choice.onclick = () => {
      playSelectSound(); // 사운드 재생
      handleNoticeSelection(type, index + 1);
    };
  });
}

function handleNoticeSelection(type, choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (type === '공지') {
    if (choice === 1) {
      storyText = '이 홈페이지를 만드는 데 소요된 시간은 두자리수 입니다.';
    } else if (choice === 2) {
      storyText = '개발자의 만족도는 5 점만점 중 5 점입니다.';
    } else if (choice === 3) {
      storyText = '코드는 엉망이었지만 나름 다듬은 코드입니다.';
    } else if (choice === 4) {
      storyText = '안에 들어가는 내용들은 2 일 밤낮을 고민한 내용들입니다.';
    }
  } else if (type === '공시') {
    if (choice === 1) {
      storyText = '배경음악도 넣으려고 했지만 어울리는걸 못찾아서 포기했습니다.';
    } else if (choice === 2) {
      storyText = '이 홈페이지의 자랑할 점은 나의 색이 잘 녹아있다는 점입니다.';
    } else if (choice === 3) {
      storyText = '여기까지 글을 쓰고 다음은 사용할 효과음을 찾으러 가야합니다.';
    } else if (choice === 4) {
      storyText = '공지 4번은 거짓말 입니다.';
    }
  }

  if (choice === 5) {
    // 선택지와 핸들러를 먼저 설정하고 대사를 출력
    updateChoices(['회사공지', '공시자료', '돌아가기']);
    setCompanyNoticeHandlers();
    enableChoices(); // 선택지 활성화

    storyText = '회사 공지 및 공시자료';
    typeWriter(storyText, 0, function () {
      console.log('Returned to company notices.');
    });
    return;
  }

  typeWriter(storyText, 0, function () {
    console.log(`${type} choice ${choice} typing complete.`);
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
