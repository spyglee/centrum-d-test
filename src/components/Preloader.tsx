import React from 'react';
import { useContekst } from '../context';
import { Backdrop, CircularProgress } from '@mui/material';

const Preloader: React.FC = () => {
  const context = useContekst();
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={context?.loading}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default Preloader;
