function handleCompanyChoice() {
  disableChoices(); // 선택지 비활성화

  const storyText = '당신은 "소개 주체가 회사였다면" 이라는 문을 열고 들어갔다. <br>야근과 거짓말의 냄새가 난다.';

  updateChoices(['EH회사 간단소개', '회사원의 삶', '회사의 새로운소식', '회사에서 만든 작품', '회사 공지']);

  typeWriter(storyText, 0, function () {
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화
  });
}

function handleCompanyChoiceSelection(choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice === 1) {
    storyText =
      'EH회사는 3대째 내려오는 전통있는 회사로, 대한민국의 발전을 위해서 여기 다 적을 수 없을 정도의 엄청난 업적을 세웠고 회사 복지로는 주 2일제이며 사원들의 급여는 평균과 비교하지 못할 정도로 많습니다. 어쨋든 대단한 회사입니다.';
  } else if (choice === 2) {
    storyText =
      'EH회사원은 원하는 시간에 출근해서 하루 6시간의 업무 시간을 채우고 퇴근합니다. 회사원 : " 이 회사가 정말 대단하다!" ';
  } else if (choice === 3) {
    storyText = '새로운 소식으로 EH회사가 초전도체를 개발했다는 소식입니다. 정말 대단하네요!';
  } else if (choice === 4) {
    storyText = '초전도체 개발, 우주 여행 가능한 유인 우주선 개발, 하늘을 나는 환경오염 0 자동차 개발';
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

  if (choice === 1) {
    showCompanyNotices();
  } else if (choice === 2) {
    showPublicData();
  } else if (choice === 3) {
    // 선택지와 핸들러를 먼저 설정하고 대사를 출력
    updateChoices(['EH회사 간단소개', '회사원의 삶', '회사의 새로운소식', '회사에서 만든 작품', '회사 공지']);
    setCompanyChoiceHandlers();
    enableChoices(); // 선택지 활성화

    const storyText =
      'EH회사는 3대째 내려오는 전통있는 회사로, 대한민국의 발전을 위해서 여기 다 적을 수 없을 정도의 엄청난 업적을 세웠고 회사 복지로는 주 2일제이며 사원들의 급여는 평균과 비교하지 못할 정도로 많습니다. 어쨋든 대단한 회사입니다.';
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
      handleNoticeSelection(type, index + 1);
    };
  });
}

function handleNoticeSelection(type, choice) {
  disableChoices(); // 선택지 비활성화

  let storyText;
  if (choice >= 1 && choice <= 4) {
    storyText = `${type} ${choice}이야`;
  } else if (choice === 5) {
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
