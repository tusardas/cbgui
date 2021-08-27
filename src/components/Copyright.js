import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        CBG Quest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}