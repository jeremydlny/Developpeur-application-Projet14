const DateInputs = memo(({ employee, onDateChange, errors }) => {
    return (
      <>
        <label>
          Date of Birth:
          <DatePicker
            selectedDate={employee.dateOfBirth}
            onChange={(date) => onDateChange(date, 'dateOfBirth')}
          />
          <ValidationError error={errors.dateOfBirth} />
        </label>
        <label>
          Start Date:
          <DatePicker
            selectedDate={employee.startDate}
            onChange={(date) => onDateChange(date, 'startDate')}
          />
          <ValidationError error={errors.startDate} />
        </label>
      </>
    );
  });