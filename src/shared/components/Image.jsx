import React from 'react';
import { Image as ImageAntd } from 'antd';
import PropTypes from 'prop-types';
import defaultImage from 'assets/images/defaultImage.png';
import defaultProjectImg from 'assets/images/defaultProjectImg.png';

const Image = ({ src, width, height, style, preview }) => {
  return (
    <ImageAntd
      src={src || defaultProjectImg}
      width={width}
      height={height}
      fallback={defaultImage}
      style={style}
      preview={preview}
    />
  );
};
Image.propTypes = {
  src: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
  preview: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
};
export default Image;
