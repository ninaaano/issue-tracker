const mockIssuesData = {
  data: {
    issues: [
      // 이슈의 전체 목록 받아오기.
      {
        id: 1, // 이슈 ID
        writer: 'hoonding', // 작성자 1명
        assignees: [], // 담당자 N명
        isOpened: true, // open 여부
        name: 'DOCS', // 이슈 이름
        description: '', // 이슈 설명
        label: null, // 이슈가 갖는 레이블 하나?
        milestone: null, // 이슈가 속한 마일스톤
        commentedUser: [], // 코멘트를 여러명 남길 수 있으니까.
      },
      {
        id: 2, // 이슈 ID
        writer: 'Aken', // 작성자 1명
        assignees: [], // 담당자 N명
        isOpened: true, // open 여부
        name: 'DOCS', // 이슈 이름
        description: '', // 이슈 설명
        label: null, // 이슈가 갖는 레이블 하나?
        milestone: null, // 이슈가 속한 마일스톤
        commentedUser: [], // 코멘트를 여러명 남길 수 있으니까.
      },
      {
        id: 3, // 이슈 ID
        writer: 'GOMUNGNAM', // 작성자 1명
        assignees: [], // 담당자 N명
        isOpened: true, // open 여부
        name: 'DOCS', // 이슈 이름
        description: '', // 이슈 설명
        label: null, // 이슈가 갖는 레이블 하나?
        milestone: null, // 이슈가 속한 마일스톤
        commentedUser: [], // 코멘트를 여러명 남길 수 있으니까.
      },
      {
        id: 4, // 이슈 ID
        writer: 'NINO', // 작성자 1명
        assignees: [], // 담당자 N명
        isOpened: true, // open 여부
        name: 'DOCS', // 이슈 이름
        description: '', // 이슈 설명
        label: null, // 이슈가 갖는 레이블 하나?
        milestone: null, // 이슈가 속한 마일스톤
        commentedUser: [], // 코멘트를 여러명 남길 수 있으니까.
      },
      {
        id: 5, // 이슈 ID
        writer: 'Aiden', // 작성자 1명
        assignees: [], // 담당자 N명
        isOpened: true, // open 여부
        name: 'DOCS', // 이슈 이름
        description: '', // 이슈 설명
        label: null, // 이슈가 갖는 레이블 하나?
        milestone: null, // 이슈가 속한 마일스톤
        commentedUser: [], // 코멘트를 여러명 남길 수 있으니까.
      },
      {
        id: 6, // 이슈 ID
        writer: 'Sol', // 작성자 1명
        assignees: [], // 담당자 N명
        isOpened: true, // open 여부
        name: 'DOCS', // 이슈 이름
        description: '', // 이슈 설명
        label: null, // 이슈가 갖는 레이블 하나?
        milestone: null, // 이슈가 속한 마일스톤
        commentedUser: [], // 코멘트를 여러명 남길 수 있으니까.
      },
    ],
  },
};

const mockUserImageData = (userId) => {
  let url = '';
  switch (userId) {
    case 1:
      // 고뭉남
      url = 'https://avatars.githubusercontent.com/u/77562698?v=4';
      break;
    case 2:
      // 니노
      url = 'https://avatars.githubusercontent.com/u/95615105?v=4';
      break;
    case 3:
      // 에이든
      url = 'https://avatars.githubusercontent.com/u/115064144?v=4';
      break;
    case 4:
      // 아켄
      url = 'https://avatars.githubusercontent.com/u/96980857?v=4';
      break;
    case 5:
      // 솔
      url = 'https://avatars.githubusercontent.com/u/86761640?v=4';
      break;
    case 6:
      // 훈딩
      url = 'https://avatars.githubusercontent.com/u/56246060?v=4';
      break;
    default:
      url = '';
  }
  return {
    data: {
      userImgURL: url,
    },
  };
};

export { mockIssuesData, mockUserImageData };
