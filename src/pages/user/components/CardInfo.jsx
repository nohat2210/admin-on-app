import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import PropTypes from 'prop-types';
import InfoItem from './InfoItem';
import ActiveItem from './ActiveItem';
import defaultAvatar from 'assets/images/avatar.png';
import useGeMyProjects from 'shared/hooks/useGetMyProjects';
import useRouter from 'shared/hooks/useRoutes';

const CardInfo = ({ item }) => {
  const { query } = useRouter();
  const project = useGeMyProjects(query.id);
  const totalProject = project.totalItems;
  return (
    <Card className="c-content shadow-3" style={{ height: 279 }}>
      <div className="flex items-center" style={{ marginLeft: '7%' }}>
        <Avatar size={82} src={item?.avatar || defaultAvatar} />
        <div style={{ marginLeft: 25 }}>
          <b className="t-600-36px-43px">{item?.fullName}</b>
          <br />
          <b className="t-400-18px-22px">{item?.email}</b>
        </div>
      </div>
      <Card bordered={false} style={{ marginLeft: '13%', height: '2vh' }}>
        <Row>
          <Col span={8}>
            <InfoItem title="City" value={item?.city} />
            <InfoItem title="Projects" value={totalProject} />
          </Col>
          <Col span={8}>
            <InfoItem title="Country" value={item?.country} />
            <Col>
              <ActiveItem title="Active" value={item?.isEnable} id={query.id} />
            </Col>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};
CardInfo.propTypes = {
  item: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    isEnable: PropTypes.bool,
    avatar: PropTypes.node,
  }),
};
export default CardInfo;
