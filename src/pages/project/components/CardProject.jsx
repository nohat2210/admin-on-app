import { Card, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import InfoItem from '../../user/components/InfoItem';
import { textClass } from 'shared/components/common';
import Image from 'shared/components/Image';
import defaultProjectImg from 'assets/images/defaultProjectImg.png';

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: var(--subtitle);
`;
const CardProject = ({ item }) => {
  return (
    <Card>
      <div className="flex" style={{ margin: '50px 139px 43px' }}>
        <Image
          src={item?.projectPhotos?.[0]?.url}
          width={124}
          height={82}
          style={{ borderRadius: 5 }}
        />
        <div className="ml-7">
          <Text className="t-600-36px-43px">{item?.title}</Text>
          <div className="flex items-center spaced" style={{ minWidth: 280 }}>
            <Text className="t-700-18px-22px c-primary">
              {item?.author.fullName}
            </Text>
            <Dot />
            <Text
              className={[
                't-700-18px-22px',
                textClass(item?.projectStatus.description),
              ]}
            >
              {item?.projectStatus.description}
            </Text>
          </div>
        </div>
      </div>
      <Card bordered={false} style={{ marginLeft: 120 }}>
        <Text className="t-600-18px-24px">Project Information</Text>
        <Row className="mt-5">
          <Col span={11}>
            <InfoItem
              title="Short Description"
              value={item?.shortDescription}
            />
          </Col>
          <Col span={11} offset={1}>
            <InfoItem title="Category" value={item?.category.name} />
            <InfoItem title="Total offers" value={`$${item?.cost}`} />
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <InfoItem
              title="What problem is the project/video solving?"
              value={item?.projectDetail.problem}
            />
          </Col>
          <Col span={11} offset={1}>
            <InfoItem
              title="Who should use whatever solution you're proposing?"
              value={item?.projectDetail.targetUser}
            />
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <InfoItem
              title="How will we measure success?"
              value={item?.projectDetail.successReason}
            />
          </Col>
          <Col span={11} offset={1}>
            <InfoItem
              title="Project URL"
              value={
                <a
                  href={`https://${item?.projectDetail.projectUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="c-black"
                >
                  {item?.projectDetail.projectUrl}
                </a>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <InfoItem
              title="Image"
              value={
                item?.projectPhotos?.[0] ? (
                  item?.projectPhotos.map(image => (
                    <div
                      key={image.id}
                      className="mr-5"
                      style={{ lineHeight: 2 }}
                    >
                      <Image src={image.url} width={90} height={61} />
                    </div>
                  ))
                ) : (
                  <Image src={defaultProjectImg} width={90} height={61} />
                )
              }
            />
          </Col>
          <Col span={11} offset={4}>
            <InfoItem
              title="Video"
              value={
                <a
                  href={`https://${item?.projectDetail.projectVideo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="c-black"
                >
                  {item?.projectDetail.projectVideo}
                </a>
              }
            />
          </Col>
        </Row>
      </Card>
    </Card>
  );
};
CardProject.propTypes = {
  item: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
};
export default CardProject;
