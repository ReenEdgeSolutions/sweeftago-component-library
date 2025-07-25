import { Typography } from "@mui/material";

interface ShortenedTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

const ShortenedText = ({
  text,
  maxLength = 20,
  className = ""
}: ShortenedTextProps) => {
  const displayText = text ? String(text) : '';

  // If text is within limit, return as is
  if (displayText.length <= maxLength) {
    return (
      <Typography className={className}>
        {displayText}
      </Typography>
    );
  }

  // Truncate text and add ellipsis at the end
  const truncatedText = `${displayText.slice(0, maxLength - 3)}...`;

  return (
    <Typography
      className={`cursor-help ${className}`}
      title={displayText}
      style={{ cursor: 'help' }}
    >
      {truncatedText}
    </Typography>
  );
};

export default ShortenedText;