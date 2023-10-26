import { ArrowUpwardRounded } from '@mui/icons-material';
import { Link } from '@mui/joy';
import * as PropTypes from 'prop-types';
import React from 'react';

function TableHeader({ children, id, order, orderBy, sort }) {
  return (
    <Link
      color='neutral'
      component='button'
      textColor={orderBy === id && 'primary.plainColor'}
      underline='none'
      startDecorator={
        <ArrowUpwardRounded sx={{ opacity: orderBy === id ? 1 : 0 }} />
      }
      sx={{
        '& svg': {
          transform:
            orderBy === id && order === 'asc'
              ? 'rotate(0deg)'
              : 'rotate(180deg)',
          transition: '0.2s',
        },
        '&:hover': {
          '& svg': { opacity: 1 },
        },
      }}
      onClick={() => sort(id)}>
      {children}
    </Link>
  );
}

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired,
};

export default TableHeader;
