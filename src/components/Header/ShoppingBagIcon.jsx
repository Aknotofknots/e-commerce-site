import React from 'react';

const ShoppingBagIcon = ({ isNavigationTapped }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22px"
      height="22px"
      viewBox="0 0 450 450"
    >
      <g transform="translate(-593 -261.171)">
        <g
          transform="translate(593 376)"
          fill="rgba(255,255,255,0)"
          stroke={isNavigationTapped ? '#fff' : '#707070'}
          strokeWidth="25"
        >
          <rect width="328" height="203" rx="11" stroke="none" />
          <rect x="1" y="1" width="326" height="201" rx="10" fill="none" />
        </g>
        <path
          d="M707,425.981s112.371-255.957,218.5,0"
          transform="translate(-59 -50)"
          fill="none"
          stroke={isNavigationTapped ? '#fff' : '#707070'}
          strokeWidth="25"
        />
      </g>
    </svg>
  );
};

export default ShoppingBagIcon;
