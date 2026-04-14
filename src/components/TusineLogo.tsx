interface TusineLogoProps {
  size?: number;
  className?: string;
}

const TusineLogo = ({ size = 36, className = "" }: TusineLogoProps) => {
  const width = size;
  const height = size;
  const rx = size * 0.22; // squircle corner radius

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Squircle background - black in light mode, white in dark mode */}
      <rect
        x="0" y="0" width="100" height="100"
        rx="22" ry="22"
        className="fill-foreground dark:fill-foreground"
      />
      
      {/* Golden serif T */}
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontFamily="'Playfair Display', 'Georgia', serif"
        fontWeight="700"
        fontSize="72"
        className="fill-primary"
      >
        T
      </text>
    </svg>
  );
};

export default TusineLogo;
