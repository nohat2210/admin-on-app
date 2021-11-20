import React from 'react';
import { Avatar, Button, Tooltip } from 'antd';
import Text from 'antd/lib/typography/Text';
import styled from '@emotion/styled';
import { LogoutOutlined } from '@ant-design/icons';
import { JSONParse } from 'shared/utils/tool';
import { removeCurrentUser, getCurrentUser } from 'core/currentUser';
import {
  getToken,
  removeToken,
  removeRefreshToken,
  removeAccessToken,
} from 'core/token';
import defaultAvatar from 'assets/images/avatar.png';
import useRouter from 'shared/hooks/useRoutes';
import { logout } from 'api/auth';

const RightHeader = styled.div`
  border-left: 1px solid #e0e0e0;
  height: 32px;
`;

const CurrentUser = () => {
  const { history } = useRouter();
  const profile = JSONParse(getCurrentUser());

  const onLogout = async () => {
    const token = getToken();
    if (token) {
      removeAccessToken();
      removeRefreshToken();
      await logout();
      removeToken(token);
      removeCurrentUser(profile);
      history.push('/login');
    }
  };

  return (
    <RightHeader className="flex center2">
      <Avatar
        className="ml-2"
        src={profile?.avatar || defaultAvatar}
        size={32}
      />
      <Text className="t-500-12px-20px ml-2">{profile?.fullName}</Text>
      <Tooltip title="Logout">
        <Button
          className="border-none"
          icon={<LogoutOutlined />}
          onClick={onLogout}
        />
      </Tooltip>
    </RightHeader>
  );
};

export default CurrentUser;
