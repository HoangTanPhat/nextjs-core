import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function ChevronUp({
  height = 32,
  width = 32,
  color = 'inherit',
  ...props
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.8554 22.1887C25.8617 22.1887 26.6667 22.9434 26.6667 23.9497C26.6667 24.956 25.8617 25.761 24.8554 25.761H7.09438C6.08809 25.761 5.33337 24.956 5.33337 23.9497C5.33337 22.9434 6.08809 22.1887 7.09438 22.1887H24.8554Z"
        fill={color}
      />
      <path
        d="M24.8554 14.1887C25.8617 14.1887 26.6667 14.9938 26.6667 16C26.6667 17.0063 25.8617 17.761 24.8554 17.761H7.09438C6.08809 17.761 5.33337 17.0063 5.33337 16C5.33337 14.9938 6.08809 14.1887 7.09438 14.1887H24.8554Z"
        fill={color}
      />
      <path
        d="M7.09438 9.81134C6.08809 9.81134 5.33337 9.05662 5.33337 8.05033C5.33337 7.04405 6.08809 6.23901 7.09438 6.23901H24.8554C25.8617 6.23901 26.6667 7.04405 26.6667 8.05033C26.6667 9.05662 25.8617 9.81134 24.8554 9.81134H7.09438Z"
        fill={color}
      />
    </svg>
  );
}
