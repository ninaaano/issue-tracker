const mockIssuesData = {
  data: {
    issues: [
      {
        issueId: 1,
        issueTitle: '[FE]: Creating Components',
        isOpened: true,
        writer: {
          name: '훈딩',
          createdAt: '2023-05-16T09:10:35.145Z',
        },
        assignees: ['아켄', '고뭉남'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 2,
            labelName: 'bug',
            color: '#DE4123',
          },
        ],
        commentedUser: ['훈딩', '아켄'],
      },
      {
        issueId: 2,
        issueTitle: '[BE]: Designing the ERD Structure',
        isOpened: true,
        writer: {
          name: '고뭉남',
          createdAt: '2023-05-17T09:10:35.145Z',
        },
        assignees: ['니노', '고뭉남'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 2,
            labelName: 'bug',
            color: '#DE4123',
          },
        ],
        commentedUser: ['니노', '고뭉남'],
      },
      {
        issueId: 3,
        issueTitle: '[FE]: Implementing UI Layout',
        isOpened: false,
        writer: {
          name: '아켄',
          createdAt: '2023-05-18T14:25:21.789Z',
        },
        assignees: ['훈딩'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['아켄', '훈딩'],
      },
      {
        issueId: 4,
        issueTitle: '[BE]: Implementing Database Queries',
        isOpened: true,
        writer: {
          name: '니노',
          createdAt: '2023-05-19T12:45:10.621Z',
        },
        assignees: ['고뭉남'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 2,
            labelName: 'bug',
            color: '#DE4123',
          },
        ],
        commentedUser: ['니노', '고뭉남'],
      },
      {
        issueId: 5,
        issueTitle: '[FE]: Implementing Authentication',
        isOpened: true,
        writer: {
          name: '아켄',
          createdAt: '2023-05-20T10:35:45.321Z',
        },
        assignees: ['훈딩', '니노'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 2,
            labelName: 'bug',
            color: '#DE4123',
          },
        ],
        commentedUser: ['아켄', '훈딩'],
      },
      {
        issueId: 6,
        issueTitle: '[BE]: Refactoring Backend Code',
        isOpened: true,
        writer: {
          name: '고뭉남',
          createdAt: '2023-05-21T15:12:53.987Z',
        },
        assignees: ['니노'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 4,
            labelName: 'task',
            color: '#FFD700',
          },
        ],
        commentedUser: ['고뭉남', '니노'],
      },
      {
        issueId: 7,
        issueTitle: '[FE]: Implementing Search Functionality',
        isOpened: false,
        writer: {
          name: '훈딩',
          createdAt: '2023-05-22T08:55:10.452Z',
        },
        assignees: ['아켄'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['훈딩', '아켄'],
      },
      {
        issueId: 8,
        issueTitle: '[FE]: Implementing Notifications',
        isOpened: true,
        writer: {
          name: '니노',
          createdAt: '2023-05-23T11:20:30.872Z',
        },
        assignees: ['훈딩', '고뭉남'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['니노', '훈딩'],
      },
      {
        issueId: 9,
        issueTitle: '[BE]: Handling File Uploads',
        isOpened: true,
        writer: {
          name: '아켄',
          createdAt: '2023-05-24T13:40:15.521Z',
        },
        assignees: ['고뭉남'],
        milestone: 'GroupProject:IssueTracker',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 4,
            labelName: 'task',
            color: '#FFD700',
          },
        ],
        commentedUser: ['아켄', '고뭉남'],
      },
      {
        issueId: 10,
        issueTitle: '[FE]: Improving Performance',
        isOpened: true,
        writer: {
          name: '고뭉남',
          createdAt: '2023-05-25T16:30:20.963',
        },
        assignees: ['에이든', 'Sol'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['고뭉남', '에이든'],
      },
      {
        issueId: 11,
        issueTitle: '[BE]: Fixing API Endpoint',
        isOpened: true,
        writer: {
          name: 'Sol',
          createdAt: '2023-05-26T09:45:35.212',
        },
        assignees: ['고뭉남'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 2,
            labelName: 'bug',
            color: '#DE4123',
          },
        ],
        commentedUser: ['Sol', '고뭉남'],
      },
      {
        issueId: 12,
        issueTitle: '[FE]: Implementing User Profile',
        isOpened: false,
        writer: {
          name: '에이든',
          createdAt: '2023-05-27T11:20:15.587',
        },
        assignees: ['Sol'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['에이든', 'Sol'],
      },
      {
        issueId: 13,
        issueTitle: '[BE]: Database Optimization',
        isOpened: true,
        writer: {
          name: '고뭉남',
          createdAt: '2023-05-28T14:10:40.931',
        },
        assignees: ['에이든'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 4,
            labelName: 'task',
            color: '#FFD700',
          },
        ],
        commentedUser: ['고뭉남', '에이든'],
      },
      {
        issueId: 14,
        issueTitle: '[FE]: Adding Unit Tests',
        isOpened: true,
        writer: {
          name: 'Sol',
          createdAt: '2023-05-29T16:55:25.498',
        },
        assignees: ['고뭉남', '에이든', '니노', '아켄', '훈딩'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 1,
            labelName: 'docs',
            color: '#0025E6',
          },
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['Sol', '고뭉남', '에이든', '니노', '아켄', '훈딩'],
      },
      {
        issueId: 15,
        issueTitle: '[BE]: Resolving Performance Bottlenecks',
        isOpened: true,
        writer: {
          name: '에이든',
          createdAt: '2023-06-01T09:30:45.731',
        },
        assignees: ['고뭉남', '니노'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 2,
            labelName: 'bug',
            color: '#DE4123',
          },
        ],
        commentedUser: ['에이든', '고뭉남', '니노'],
      },
      {
        issueId: 16,
        issueTitle: '[FE]: Implementing Notifications',
        isOpened: true,
        writer: {
          name: '니노',
          createdAt: '2023-06-02T14:20:15.958',
        },
        assignees: ['아켄', '훈딩'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 3,
            labelName: 'enhancement',
            color: '#50C878',
          },
        ],
        commentedUser: ['니노', '아켄', '훈딩'],
      },
      {
        issueId: 17,
        issueTitle: '[BE]: Fixing Security Vulnerabilities',
        isOpened: true,
        writer: {
          name: '고뭉남',
          createdAt: '2023-06-03T17:40:30.521',
        },
        assignees: ['Sol', '에이든'],
        milestone: 'GroupProject:NewMilestone',
        labels: [
          {
            labelId: 4,
            labelName: 'task',
            color: '#FFD700',
          },
        ],
        commentedUser: ['고뭉남', 'Sol', '에이든'],
      },
    ],
  },
};

const mockUserImageData = (userId) => {
  let url = '';
  let userName = '';

  switch (userId) {
    case 1:
      // 고뭉남
      userName = '고뭉남';
      url = 'https://avatars.githubusercontent.com/u/77562698?v=4';
      break;

    case 2:
      // 니노
      userName = '니노';
      url = 'https://avatars.githubusercontent.com/u/95615105?v=4';
      break;

    case 3:
      // 에이든
      userName = '에이든';
      url = 'https://avatars.githubusercontent.com/u/115064144?v=4';
      break;

    case 4:
      // 아켄
      userName = '아켄';
      url = 'https://avatars.githubusercontent.com/u/96980857?v=4';
      break;

    case 5:
      // 솔
      userName = '솔';
      url = 'https://avatars.githubusercontent.com/u/86761640?v=4';
      break;

    case 6:
      // 훈딩
      userName = '훈딩';
      url = 'https://avatars.githubusercontent.com/u/56246060?v=4';
      break;

    default:
      url = '';
  }
  return {
    data: {
      userName,
      userImgURL: url,
    },
  };
};

export { mockIssuesData, mockUserImageData };
