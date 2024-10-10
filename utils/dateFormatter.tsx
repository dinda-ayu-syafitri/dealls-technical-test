import React from "react";

export const DateFormatter: React.FC<{ dateString: string }> = ({
  dateString,
}) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return <span>Invalid date</span>;
  }

  return new Date(dateString).toLocaleString(undefined, options);
};
