import request from 'core/request';

export const getNotifications = params =>
  request.get('notifications', { params });

export const createNotification = ({ title, bodyText }) =>
  request.post('notifications/push-global-notification', { title, bodyText });
