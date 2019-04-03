import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Autorenew from '@material-ui/icons/Autorenew';

import ToggleFavorite from '../common/toggleFavorite';
import Pagination, { usePagination } from '../common/pagination';

import useGetCountriesQuery from './querycomponents/useGetCountriesQuery';

import './list.css';

const List = () => {
  const [{ page, itemsPerPage }, onPageChange] = usePagination();
  const offset = (page - 1) * itemsPerPage;
  const { data, loading, refetch } = useGetCountriesQuery(itemsPerPage, offset);
  return (
    <Pagination page={page} onPageChange={onPageChange}>
      <div className="countries-list">
        <Fragment>
          <div className="countries-list-refresh">
            <Autorenew
              color="secondary"
              fontSize="large"
              onClick={() => refetch()}
              className={loading ? 'rotate' : ''}
            />
          </div>
          {data && data.countries ? (
            <Fragment>
              {data.countries.map(country => (
                <Link to={`/contry/${country.code}`} key={country.code}>
                  <Paper className="country-card" elevation={1}>
                    <img src={`http://www.countryflags.io/${country.code}/flat/64.png`} alt={country.code} />
                    <div className="country-card-content">
                      <Typography variant="h5" component="h3">
                        {country.name}
                      </Typography>
                    </div>
                    <ToggleFavorite code={country.code} isFavorite={country.isFavorite} />
                  </Paper>
                </Link>
              ))}
            </Fragment>
          ) : null}
        </Fragment>
      </div>
    </Pagination>
  );
};

export default List;
