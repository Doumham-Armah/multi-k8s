import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Im some other page! THIS IS SOME OTHER PAGE
      <Link to="/">Go back home</Link>
    </div>
  );
};
