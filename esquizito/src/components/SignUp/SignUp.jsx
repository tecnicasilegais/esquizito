import React from 'react';
import withAuth from 'util/WithAuth';

function SignUp() {
  return (
    <div
      style={{
        backgroundColor: '#ff0000',
        minWidth: '30px',
        minHeight: '30px',
      }}
    />
  );
}

export default withAuth(SignUp);
