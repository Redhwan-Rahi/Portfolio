import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  );
}

export function GitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.2c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.3-5.27-1.29-5.27-5.7 0-1.26.45-2.29 1.18-3.1-.12-.28-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06a4.47 4.47 0 0 1 1.18 3.09c0 4.43-2.71 5.4-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .3.21.67.8.55A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.34 3.5A2.35 2.35 0 1 1 5.33 8.2a2.35 2.35 0 0 1 0-4.7ZM3.31 9.97h4.05V21H3.31V9.97Zm6.58 0h3.88v1.5h.06c.54-1.03 1.86-2.12 3.83-2.12 4.1 0 4.85 2.7 4.85 6.2V21h-4.04v-4.83c0-1.15-.02-2.63-1.6-2.63-1.61 0-1.86 1.26-1.86 2.55V21H9.89V9.97Z" />
    </svg>
  );
}

export function Moon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
    </svg>
  );
}

export function Sun(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
