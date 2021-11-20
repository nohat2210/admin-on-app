import React from 'react';
import PropTypes from 'prop-types';
import { Table as TableAntd } from 'antd';

const Table = ({
  columns,
  dataSource,
  onChange,
  rowKey,
  currentPage,
  totalItems,
  loading,
  onRow,
  onHandleChange,
  onShowSizeChange,
}) => {
  return (
    <TableAntd
      rowKey={rowKey}
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      onRow={onRow}
      pagination={{
        current: currentPage,
        total: totalItems,
        showSizeChanger: true,
        pageSizeOptions: ['10', '15', '20'],
        defaultPageSize: 10,
        showQuickJumper: true,
        onChange,
        onShowSizeChange,
      }}
      onChange={onHandleChange}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.arrayOf(PropTypes.any),
  ]),
  dataSource: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.arrayOf(PropTypes.any),
  ]),
  onChange: PropTypes.func,
  rowKey: PropTypes.string,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  loading: PropTypes.bool,
  onRow: PropTypes.func,
  onHandleChange: PropTypes.func,
  onShowSizeChange: PropTypes.func,
};
export default Table;
