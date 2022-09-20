import { TextField } from "@mui/material";

export function FormInput(props) {
  return (
    <TextField
      variant={props.variant}
      fullWidth
      margin="dense"
      autoFocus={props.autoFocus}
      required={props.required}
      label={props.label}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

export function InputMultiline(props) {
  return (
    <TextField
      fullWidth
      multiline
      rows={props.rows}
      margin="dense"
      placeholder={props.placeholder}
      label={props.label}
      name="Mensagem"
    />
  );
}
