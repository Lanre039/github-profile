import { formatDistanceToNow } from "date-fns";

export const dateDistanceToNow = (
  givenDate: string,
  addSuffix = true,
  includeSeconds = true
) => {
  const formattedDate = formatDistanceToNow(new Date(givenDate), {
    addSuffix,
    includeSeconds,
  });
  return formattedDate;
};
