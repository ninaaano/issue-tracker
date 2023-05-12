import { rest } from 'msw';

import { LOGIN, ISSUES, COMMENTS, LABELS, MILESTONES } from '../constants/api';
import { mockIssuesData } from './mockData';

const getIssues = (request, response, context) => {
  return response(context.status(200), context.json(mockIssuesData));
};

const mockAPIHandler = [rest.get(ISSUES.GET_ALL_ISSUES, getIssues)];

export { mockAPIHandler };
