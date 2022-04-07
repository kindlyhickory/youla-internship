import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const TimerPanel = (props) => {
  const theme = createTheme({
    typography: {
      fontSize: 22,
      fontFamily: 'Roboto',

    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Typography color="gray" variant="h4" component="h2">
        <span>{props.time.h}</span>:
        <span>{props.time.m}</span>:
        <span>{props.time.s}</span>:
        <span>{props.time.ms}</span>
      </Typography>
    </ThemeProvider>
  );
}

export default TimerPanel