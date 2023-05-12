import { rest } from 'msw';

import { LOGIN, USERS, ISSUES, COMMENTS, LABELS, MILESTONES } from '../constants/api';
import { mockIssuesData, mockUserImageData } from './mockData';

const getIssues = (request, response, context) => {
  return response(context.status(200), context.json(mockIssuesData));
};

const getUserImage = (request, response, context) => {
  return response(context.status(200), context.json(mockUserImageData(6)));
};

const mockAPIHandler = [
  rest.get(ISSUES.GET_ALL_ISSUES, getIssues),
  rest.get(USERS.GET_USER_IMG(6), getUserImage),
];

export { mockAPIHandler };
