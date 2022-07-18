import React from 'react';

const Scroll = (props) => {
  return (
    <div>
      <div style={{ overflowY: 'scroll', height: '700px' }}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
