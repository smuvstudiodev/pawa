import type { SVGProps } from 'react';

const Data = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.0019 4C21.7139 4 26.9619 5.996 31.0819 9.328L16.0019 28L0.921875 9.32933C5.04187 5.996 10.2872 4 16.0019 4ZM16.0019 6.66667C11.9645 6.66667 8.10454 7.78933 4.77521 9.856L7.31388 12.9987C9.86854 11.516 12.8352 10.6667 16.0019 10.6667C19.1685 10.6667 22.1352 11.516 24.6899 12.9987L27.2285 9.85333C23.8979 7.788 20.0379 6.66667 16.0019 6.66667Z"
      fill="#042932"
    />
  </svg>
);

const data = Data;

export { data };
