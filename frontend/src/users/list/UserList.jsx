import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TableList from '../../table-list';
import withData from '../../withData';
import axios from 'axios';


function loadUserData() {
  return axios
    .get('/api/users')
    .then(response => response.data)
    .catch(e => console.error(e));
}


const headCells = [
  {
    id: 'id',
    label: 'User Id',
  },
  {
    id: 'email',
    label: 'User Email',
  },
  {
    id: 'name',
    label: 'User Name',
  }
];



export default function UserList() {
  return withData(
    (data, isLoading, loaded) => {
      if (isLoading && !loaded) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        );
      } else {
        return (
          <TableList header={headCells} rows={data} headerLabel='User list' />
        );
      }
    }, loadUserData)();
}
