import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import './pagination.css';

class Pagination extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    itemsPerPage: PropTypes.number
  };

  static defaultProps = {
    itemsPerPage: 4
  };

  state = {
    page: 1
  };

  handleChangePage(page) {
    this.setState({ page: page < 1 ? 1 : page });
  }

  render() {
    const { children, itemsPerPage } = this.props;
    const { page } = this.state;

    return (
      <div className="pagination-container">
        <div className="pagination-content">{children({ page, itemsPerPage })}</div>
        <Paper className="pagination-buttons">
          <ChevronLeft color="secondary" fontSize="large" onClick={() => this.handleChangePage(page - 1)} />
          <Typography component="p">{page}</Typography>
          <ChevronRight color="secondary" fontSize="large" onClick={() => this.handleChangePage(page + 1)} />
        </Paper>
      </div>
    );
  }
}

export default Pagination;
