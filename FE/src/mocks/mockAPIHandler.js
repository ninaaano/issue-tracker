import { rest } from 'msw';

import { LOGIN, USERS, ISSUES, COMMENTS, LABELS, MILESTONES } from '../constants/api';
import {
  mockIssuesData,
  mockUserImageData,
  mockUserData,
  mockLabelData,
  mockMilestoneData,
} from './mockData';

const getIssues = (request, response, context) => {
  return response(context.status(200), context.json(mockIssuesData));
};

const getUserImage = (request, response, context) => {
  return response(context.status(200), context.json(mockUserImageData(6)));
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

const mockAPIHandler = [
  rest.get(ISSUES.GET_ALL_ISSUES, getIssues),
  rest.get(USERS.GET_USER_IMG(6), getUserImage),
  rest.get(USERS.GET_ALL_USERS, getUserData),
  rest.get(LABELS.GET_ALL_LABELS, getLabelData),
  rest.get(MILESTONES.GET_ALL_MILESTONES, getMilestoneData),
];

export { mockAPIHandler };
