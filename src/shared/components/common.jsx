import styled from '@emotion/styled';
import { Button } from 'antd';

export const RoundedButton = styled(Button)`
  && {
    border-radius: 21.5px;
  }
`;
export const textClass = status => {
  if (status === 'Waiting for offer') return 'c-yellow';
  if (status === 'Started') return 'c-secondary-blue';
  if (status === 'Completed') return 'c-primary';
  return 'c-warning';
};
