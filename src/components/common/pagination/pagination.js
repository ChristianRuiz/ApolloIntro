import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import './pagination.css';

const Pagination = ({ children, page, onPageChange }) => {
  return (
    <div className="pagination-container">
      <div className="pagination-content">{children}</div>
      <Paper className="pagination-buttons">
        <ChevronLeft color="secondary" fontSize="large" onClick={() => onPageChange(page - 1)} />
        <Typography component="p">{page}</Typography>
        <ChevronRight color="secondary" fontSize="large" onClick={() => onPageChange(page + 1)} />
      </Paper>
    </div>
  );
};

Pagination.propTypes = {
  children: PropTypes.element.isRequired,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func
};

Pagination.defaultProps = {
  onPageChange: () => {}
};

export default Pagination;
