import { useMediaQuery } from "@material-ui/core";
type deviceType = "computer" | "tablet" | "mobile";
const useBreakPoints = (): deviceType => {
  const isMobile = useMediaQuery("(max-width:500px)");
  const isComputer = useMediaQuery(`(min-width:992px)`);
  return isMobile ? "mobile" : isComputer ? "computer" : "tablet";
};

export default useBreakPoints;
