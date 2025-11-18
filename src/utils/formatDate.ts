export const formatDate = (dateString: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const eventDate = new Date(dateString);
  if (isNaN(eventDate.getTime())) return "Invalid date";

  const eventYear = eventDate.getFullYear();
  const eventMonth = eventDate.getMonth();
  const eventDay = eventDate.getDate();

  const getSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${months[eventMonth]} ${eventDay}${getSuffix(eventDay)} ${
    currentYear === eventYear ? "" : `, ${eventYear}`
  }`;
};
