import type { SVGProps } from 'react';

const Send = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.59315 12.4204C1.89715 12.1884 1.89048 11.8137 2.60648 11.575L28.0558 3.09238C28.7611 2.85771 29.1651 3.25238 28.9678 3.94305L21.6958 29.391C21.4958 30.0964 21.0891 30.1204 20.7905 29.451L15.9985 18.667L23.9985 8.00038L13.3318 16.0004L2.59315 12.4204V12.4204Z"
      fill="#042932"
    />
  </svg>
);

const send = Send;

export { send };
