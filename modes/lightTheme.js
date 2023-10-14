// lightTheme.js
import { createTheme } from "@material-ui/core/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "hsl(0, 0%, 100%)",
    },
  },
});

export default lightTheme;
