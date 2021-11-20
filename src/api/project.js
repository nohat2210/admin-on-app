import request from 'core/request';

export const getProjects = params => request.get('projects', { params });
export const getProject = ({ id }) => request.get(`projects/${id}`);
export const getStatuses = params =>
  request.get('project-statuses', { params });
