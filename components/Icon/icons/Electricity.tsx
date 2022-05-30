import type { SVGProps } from 'react';

const Electricity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30"
    height="32"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.6912 13.7481C13.8058 13.3075 14.2036 13 14.6589 13L26.7126 13C27.605 13 28.0505 14.0801 27.4177 14.7092L10.4657 31.5611C10.3283 31.6977 10.1424 31.7743 9.94866 31.7743C9.46863 31.7743 9.11803 31.3208 9.23892 30.8563L13.6912 13.7481Z"
      fill="#042932"
    />
    <path
      d="M18.6713 0.213264C18.8087 0.0766702 18.9946 -1.69645e-07 19.1884 -1.89098e-07C19.6684 -2.37292e-07 20.019 0.453515 19.8981 0.918059L15.4459 18.0262C15.3312 18.4668 14.9334 18.7743 14.4781 18.7743L2.42436 18.7743C1.53203 18.7743 1.08651 17.6943 1.71935 17.0651L18.6713 0.213264Z"
      fill="#042932"
    />
  </svg>
);

const electricity = Electricity;

export { electricity };
