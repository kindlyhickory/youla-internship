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
        <span>{props.time.hours <= 10 ? "0" + props.time.hours : props.time.hours}</span>:
        <span>{props.time.minutes <= 10 ? "0" + props.time.minutes : props.time.minutes}</span>:
        <span>{props.time.seconds <= 10 ? "0" + props.time.seconds : props.time.seconds}</span>:
        <span>{props.time.ms <= 10 ? "0" + props.time.ms : props.time.ms}</span>
      </Typography>
    </ThemeProvider>
  );
}

export default TimerPanel