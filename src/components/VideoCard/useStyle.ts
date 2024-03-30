export const useStyle = () => {
  return {
    cardContainer: {
      background: "none",
      cursor: "pointer"
    },
    customTypography: {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitLineClamp: 2,
      lineHeight: "1.4rem",
      fontWeight: "bold",
      color: "white"
    }
  };
};
