type TextFieldProps = {
  label?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function TextField({ label, ...arg }: TextFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <input {...arg}></input>
    </div>
  );
}

export default TextField;
