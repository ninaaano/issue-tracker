import { rest } from 'msw';

import { LOGIN, USERS, ISSUES, COMMENTS, LABELS, MILESTONES } from '../constants/api';
import {
  mockIssuesData,
  mockUserImageData,
  mockUserData,
  mockLabelData,
  mockMilestoneData,
  mockIssueDetailData,
} from './mockData';

const getIssues = (request, response, context) => {
  return response(context.status(200), context.json(mockIssuesData));
};

const getUserImage = (request, response, context) => {
  const { userId } = request.params;

  return response(context.status(200), context.json(mockUserImageData(Number(userId))));
};

const getUserData = (request, response, context) => {
  return response(context.status(200), context.json(mockUserData));
};

const getLabelData = (request, response, context) => {
  return response(context.status(200), context.json(mockLabelData));
};

const getMilestoneData = (request, response, context) => {
  return response(context.status(200), context.json(mockMilestoneData));
};

const getIssueDetailData = (request, response, context) => {
  const { issueId } = request.params;
  const data = {
    data: mockIssueDetailData(Number(issueId)),
  };

  return response(context.status(200), context.json(data));
};

const postMilestoneNewData = (request, response, context) => {
  const lastMilestoneId = mockMilestoneData.data[mockMilestoneData.data.length - 1].milestoneId;
  const { title, content, deadline } = request.body;
  const responseBody = {
    milestoneId: lastMilestoneId + 1,
    milestoneName: title,
    content: content === undefined ? null : content,
    deadline: deadline === undefined ? null : deadline,
    openIssue: 0,
    closeIssue: 0,
    isOpened: true,
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

  const { title, content, deadline, isOpened } = request.body;
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
    isOpened,
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

const postLabelNewData = (request, response, context) => {
  const lastLabelId = mockLabelData.data[mockLabelData.data.length - 1].labelId;
  const { labelName, content, backgroundColor, textColor } = request.body;
  const responseBody = {
    labelId: lastLabelId + 1,
    labelName,
    content: content === undefined ? null : content,
    backgroundColor,
    textColor,
  };

  mockLabelData.data.push(responseBody);
  return response(
    context.status(200),
    context.json({
      status: 200,
      message: '요청이 완료되었습니다.',
      data: responseBody,
    }),
  );
};

const mockAPIHandler = [
  rest.get(ISSUES.GET_ALL_ISSUES, getIssues),
  rest.get(ISSUES.GET_ISSUE(':issueId'), getIssueDetailData),
  rest.get(USERS.GET_USER_IMG(':userId'), getUserImage),
  rest.get(USERS.GET_ALL_USERS, getUserData),
  rest.get(MILESTONES.GET_ALL_MILESTONES, getMilestoneData),
  rest.post(MILESTONES.POST_MILESTONE, postMilestoneNewData),
  rest.patch(MILESTONES.PATCH_MILESTONE(':milestoneId'), editMilestoneData),
  rest.get(LABELS.GET_ALL_LABELS, getLabelData),
  rest.post(LABELS.POST_LABEL, postLabelNewData),
];

export { mockAPIHandler };
