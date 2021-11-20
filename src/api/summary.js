/* eslint-disable import/prefer-default-export */
import request from '../core/request';

export const getSummary = () => request.get('summary');
