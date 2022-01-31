import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function TableToolbar({headerlabel}) {
  return (
    <Toolbar
      sx={{pl: { sm: 2 }, pr: { xs: 1, sm: 1 }}}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {headerlabel}
        </Typography>
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  headerlabel: PropTypes.string.isRequired,
};

export default TableToolbar;