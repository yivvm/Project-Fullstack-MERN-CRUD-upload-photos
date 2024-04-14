import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "75%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundBlendMode: "darken",
  },
  border: {
    // border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  title: {
    padding: "0 12px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});

/* ---- 2nd solution ---- */
/*
const styles = (theme) => {
  ({
    media: {
      height: 0,
      paddingTop: "56.25%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "darken",
    },
    border: {
      border: "solid",
    },
    fullHeightCard: {
      height: "100%",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      height: "100%",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white",
    },
    overlay2: {
      position: "absolute",
      top: "20px",
      right: "20px",
      color: "white",
    },
    grid: {
      display: "flex",
    },
    details: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
    },
    title: {
      padding: "0 16px",
    },
    cardActions: {
      padding: "0 16px 8px 16px",
      display: "flex",
      justifyContent: "space-between",
    },
  });
};

export default styles;
*/
