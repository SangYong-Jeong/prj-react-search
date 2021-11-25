import React from 'react';

const Logo = () => {
  return (
    <h1 className="text-center fa-2x py-4 text-primary">
      <i className="fa fa-search"></i> JSY FIND
    </h1>
  );
};

export default React.memo(Logo);
