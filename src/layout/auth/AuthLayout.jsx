import { Col, Row } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import introImage from 'assets/images/intro.png';
import Image from 'shared/components/Image';
import Logo from 'shared/components/Logo';

const StyleCol = styled(Col)`
  && {
    display: none;
    background-color: var(--primary-color);
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;
const AuthLayout = ({ children }) => {
  return (
    <Row className="h-screen">
      <Col md={8} sm={24} xs={24} className="p-10">
        <Logo height={113} width={123} style={{ marginBottom: 40 }} />
        <div>{children}</div>
      </Col>
      <StyleCol md={16} sm={0} xs={0} className="flex center2">
        <Image src={introImage} alt="intro" preview={false} />
      </StyleCol>
    </Row>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthLayout;
