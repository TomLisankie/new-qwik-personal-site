import { formatDistance as formatDistanceFn } from "date-fns";
import us from "date-fns/locale/en-US";

export const formatDistance = (date: string) => {
  return formatDistanceFn(new Date(date), new Date(), {
    locale: us,
    addSuffix: false,
  });
};
