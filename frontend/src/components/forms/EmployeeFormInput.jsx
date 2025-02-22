const EmployeeFormInput = memo(({ label, name, value, onChange, type = "text", required, pattern, error }) => {
    return (
      <label>
        {label}:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
        />
        <ValidationError error={error} />
      </label>
    );
  });

  export default EmployeeFormInput;