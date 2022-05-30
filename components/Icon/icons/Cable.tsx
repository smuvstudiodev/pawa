import type { SVGProps } from 'react';

const Cable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="path-1-inside-1_1249_155" fill="white">
      <rect y="5.56641" width="28" height="21.4667" rx="1" />
    </mask>
    <rect
      y="5.56641"
      width="28"
      height="21.4667"
      rx="1"
      stroke="#042932"
      strokeWidth="7.46667"
      strokeLinejoin="round"
      mask="url(#path-1-inside-1_1249_155)"
    />
    <mask id="path-2-inside-2_1249_155" fill="white">
      <path d="M19.2095 0.974146C19.4498 0.558031 19.9819 0.415459 20.398 0.655703L21.316 1.1857C21.7321 1.42595 21.8746 1.95803 21.6344 2.37415L18.7349 7.3963L16.31 5.9963L19.2095 0.974146Z" />
    </mask>
    <path
      d="M19.2095 0.974146C19.4498 0.558031 19.9819 0.415459 20.398 0.655703L21.316 1.1857C21.7321 1.42595 21.8746 1.95803 21.6344 2.37415L18.7349 7.3963L16.31 5.9963L19.2095 0.974146Z"
      fill="#042932"
      stroke="#042932"
      strokeWidth="1.86667"
      mask="url(#path-2-inside-2_1249_155)"
    />
    <mask id="path-3-inside-3_1249_155" fill="white">
      <path d="M8.86859 0.950708C8.62835 0.534594 8.09627 0.392022 7.68015 0.632266L6.76216 1.16227C6.34605 1.40251 6.20348 1.93459 6.44372 2.35071L9.34327 7.37287L11.7681 5.97287L8.86859 0.950708Z" />
    </mask>
    <path
      d="M8.86859 0.950708C8.62835 0.534594 8.09627 0.392022 7.68015 0.632266L6.76216 1.16227C6.34605 1.40251 6.20348 1.93459 6.44372 2.35071L9.34327 7.37287L11.7681 5.97287L8.86859 0.950708Z"
      fill="#042932"
      stroke="#042932"
      strokeWidth="1.86667"
      mask="url(#path-3-inside-3_1249_155)"
    />
    <path
      d="M1.86719 19.5663L25.2005 12.0996V25.1663H1.86719V19.5663Z"
      fill="#042932"
    />
  </svg>
);

const cable = Cable;

export { cable };
