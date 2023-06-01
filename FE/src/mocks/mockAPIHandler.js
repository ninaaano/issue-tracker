import { rest } from 'msw';

import { LOGIN, USERS, ISSUES, COMMENTS, LABELS, MILESTONES } from '../constants/api';
import {
  mockIssuesData,
  mockUserImageData,
  mockUserData,
  mockLabelData,
  mockMilestoneData,
  mockIssueDetailData,
  issueDetailData,
} from './mockData';
// import { mockUserImageData } from './mockData';

const getIssues = (request, response, context) => {
  // const mockIssuesData = localStorage.getItem('mockIssuesData');

  return response(context.status(200), context.json(mockIssuesData));
};

const getUserImage = (request, response, context) => {
  const { userId } = request.params;

  return response(context.status(200), context.json(mockUserImageData(Number(userId))));
};

const getUserData = (request, response, context) => {
  // const mockUserData = localStorage.getItem('mockUserData');

  return response(context.status(200), context.json(mockUserData));
};

const getLabelData = (request, response, context) => {
  // const mockLabelData = localStorage.getItem('mockLabelData');

  return response(context.status(200), context.json(mockLabelData));
};

const getMilestoneData = (request, response, context) => {
  // const mockMilestoneData = localStorage.getItem('mockMilestoneData');

  return response(context.status(200), context.json(mockMilestoneData));
};

const getIssueDetailData = (request, response, context) => {
  const { issueId } = request.params;
  const data = {
    data: mockIssueDetailData(Number(issueId)),
  };

  return response(context.status(200), context.json(data));
};

const postNewIssueData = (request, response, context) => {
  const lastIssueId = issueDetailData.length !== 0 ? issueDetailData[issueDetailData.length - 1].issueId : 0;
  const { issueTitle, comment, assignee, writer, label, milestone } = request.body;
  const createdAt = new Date();

  const responseBody = {
    issueId: lastIssueId + 1,
    issueTitle,
    isopened: true,
    writer: {
      userId: 6,
      name: '훈딩',
      url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
      createdAt,
    },
    assignee: mockUserData.data.filter(({ userId }) => assignee.includes(userId)),
    milestone: mockMilestoneData.data.filter(({ milestoneId }) => milestone === milestoneId)[0] || null,
    label: mockLabelData.data.filter(({ labelId }) => label.includes(labelId)),
    comment: [
      {
        commentId: 1,
        content: comment,
        createdAt,
        commentUser: {
          userId: 6,
          name: '훈딩',
          url: 'https://avatars.githubusercontent.com/u/56246060?v=4',
        },
      },
    ],
  };

  issueDetailData.push(responseBody);

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: '요청이 완료되었습니다.',
      data: responseBody,
    }),
  );
};

const editTargetIssueData = (request, response, context) => {
  const { issueId } = request.params;

  const { title, isopened } = request.body;

  let targetIssueIndex = -1;

  issueDetailData.forEach((issue, index) => {
    if (issue.issueId === Number(issueId)) {
      targetIssueIndex = index;
    }
  });

  issueDetailData[targetIssueIndex] = {
    ...issueDetailData[targetIssueIndex],
    issueTitle: title || issueDetailData[targetIssueIndex].issueTitle,
    isopened: isopened !== undefined ? isopened : issueDetailData[targetIssueIndex].isopened,
  };

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'issue Data Patch 완료',
      data: issueDetailData[targetIssueIndex],
    }),
  );
};

const postMilestoneNewData = (request, response, context) => {
  const lastMilestoneId =
    mockMilestoneData.data.length !== 0
      ? mockMilestoneData.data[mockMilestoneData.data.length - 1].milestoneId
      : 1;
  const { title, content, deadline } = request.body;
  const responseBody = {
    milestoneId: lastMilestoneId + 1,
    milestoneName: title,
    content: content === undefined ? null : content,
    deadline: deadline === undefined ? null : deadline,
    openCount: 0,
    closeCount: 0,
    isopened: true,
  };

  mockMilestoneData.data.push(responseBody);
  return response(
    context.status(200),
    context.json({
      status: 200,
      message: '요청이 완료되었습니다.',
      data: responseBody,
    }),
  );
};

const editMilestoneData = (request, response, context) => {
  const { milestoneId } = request.params;

  const { title, content, deadline, isopened } = request.body;
  let targetMilestoneIndex = -1;

  mockMilestoneData.data.forEach((milestone, index) => {
    if (milestone.milestoneId === Number(milestoneId)) {
      targetMilestoneIndex = index;
    }
  });

  mockMilestoneData.data[targetMilestoneIndex] = {
    ...mockMilestoneData.data[targetMilestoneIndex],
    milestoneName: title === undefined ? mockMilestoneData.data[targetMilestoneIndex].milestoneName : title,
    content: content === undefined ? null : content,
    deadline: deadline === undefined ? null : deadline,
    isopened,
  };

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'milestone Data Patch 완료',
      data: mockMilestoneData.data[targetMilestoneIndex],
    }),
  );
};

const deleteMilestone = (request, response, context) => {
  const { milestoneId } = request.params;

  const updatedMilestoneData = mockMilestoneData.data.filter(
    (milestone) => milestone.milestoneId !== Number(milestoneId),
  );

  mockMilestoneData.data = updatedMilestoneData || []; // 해당 id에 해당하는 데이터를 지운 데이터로 바꿔줌.

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'milestone Data Delete 완료',
      data: mockMilestoneData.data,
    }),
  );
};

const postLabelNewData = (request, response, context) => {
  const lastLabelId =
    mockLabelData.data.length !== 0 ? mockLabelData.data[mockLabelData.data.length - 1].labelId : 1;
  const { labelName, content, backgroundColor, fontColor } = request.body;
  const responseBody = {
    labelId: lastLabelId + 1,
    labelName,
    content: content === undefined ? null : content,
    backgroundColor,
    fontColor,
  };

  mockLabelData.data.push(responseBody);

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'label 생성 완료',
      data: responseBody,
    }),
  );
};

const editLabelData = (request, response, context) => {
  const { labelId } = request.params;

  const { labelName, content, backgroundColor, fontColor } = request.body;
  let targetLabelIndex = -1;

  mockLabelData.data.forEach((label, index) => {
    if (label.labelId === Number(labelId)) {
      targetLabelIndex = index;
    }
  });

  mockLabelData.data[targetLabelIndex] = {
    ...mockLabelData.data[targetLabelIndex],
    labelName,
    content: content === undefined ? null : content,
    backgroundColor,
    fontColor,
  };

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'Label Data Patch 완료',
      data: mockLabelData.data[targetLabelIndex],
    }),
  );
};

const deleteLabel = (request, response, context) => {
  const { labelId } = request.params;

  const updatedLabelData = mockLabelData.data.filter((label) => label.labelId !== Number(labelId));

  mockLabelData.data = updatedLabelData || []; // 해당 id에 해당하는 데이터를 지운 데이터로 바꿔줌.

  return response(
    context.status(200),
    context.json({
      status: 200,
      message: 'Label Data 삭제 완료',
      data: mockMilestoneData.data,
    }),
  );
};

const mockAPIHandler = [
  rest.get(ISSUES.GET_ALL_ISSUES, getIssues),
  rest.get(ISSUES.GET_ISSUE(':issueId'), getIssueDetailData),
  rest.post(ISSUES.POST_ISSUE, postNewIssueData),
  rest.patch(ISSUES.PATCH_ISSUE(':issueId'), editTargetIssueData),

  rest.get(USERS.GET_USER_IMG(':userId'), getUserImage),
  rest.get(USERS.GET_ALL_USERS, getUserData),

  rest.get(MILESTONES.GET_ALL_MILESTONES, getMilestoneData),
  rest.post(MILESTONES.POST_MILESTONE, postMilestoneNewData),
  rest.patch(MILESTONES.PATCH_MILESTONE(':milestoneId'), editMilestoneData),
  rest.delete(MILESTONES.DELETE_MILESTONE(':milestoneId'), deleteMilestone),

  rest.get(LABELS.GET_ALL_LABELS, getLabelData),
  rest.post(LABELS.POST_LABEL, postLabelNewData),
  rest.patch(LABELS.PATCH_LABEL(':labelId'), editLabelData),
  rest.delete(LABELS.DELETE_LABEL(':labelId'), deleteLabel),
];

export { mockAPIHandler };
