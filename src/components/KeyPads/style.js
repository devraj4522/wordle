import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  key: {
    "&&": {
      backgroundColor: "#646c5f",
      borderRadius: "5px",
      height: "58px",
      lineHeight: "58px",
      maxWidth: "48px",
      minWidth: "37px",
      /* left: 6px; */
      color: "#fff",
      fontSize: "15px",
    },
    "&:hover": {
      color: "#646c5f",
      backgroundColor: "#83897f",
    },
  },
  keyYellow: {
    "&&": {
      borderRadius: "5px",
      height: "58px",
      lineHeight: "58px",
      maxWidth: "48px",
      minWidth: "37px",
      /* left: 6px; */
      color: "#D7DADC",
      fontSize: "15px",
      backgroundColor: yellow[300],
    },
  },
  keyGreen: {
    "&&": {
      borderRadius: "5px",
      height: "58px",
      lineHeight: "58px",
      maxWidth: "48px",
      minWidth: "37px",
      /* left: 6px; */
      color: "#fff",
      fontSize: "15px",
      backgroundColor: yellow[300],
    },
  },
  keyboard: {
    "&&": {
      height: "200px",
      width: "95vw",
      maxWidth: "486px",
      // backgroundColor: "#D7DADC",
      margin: "auto",
      marginBottom: "8px",
      marginTop: "3vh",
    },
  },
  keyRow: {
    "&&": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
      marginTop: "8px",
    },
  },
  keyRow2: {
    "&&": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
      marginLeft: "23px",
      marginRight: "23px",
      marginTop: "8px",
    },
  },
});
