import Button from '@mui/material/Button';

const ButtonComponent = (props) => {
  return (
    <div>
      {(props.status === 0) ?
        <Button
          variant="outlined"
          onClick={props.start}
          color="success">
          Пуск
        </Button> : ""
      }
      {(props.status === 1) ?
        <div className="buttons__items">
          <Button variant="outlined"
            onClick={props.reset}
            color="error">
            Cбросить
          </Button>
          <Button
            variant="outlined"
            onClick={props.stop}
            color="secondary">
            Пауза
          </Button>
        </div> : ""}
      {(props.status === 2) ?
        <div className="buttons__items">
          <Button
            variant="outlined"
            onClick={props.reset}
            color="error">
            Сбросить
          </Button>
          <Button
            variant="outlined"
            onClick={props.resume}
            color="success">
            Продолжить
          </Button>
        </div> : ""}
    </div>
  );
}

export default ButtonComponent