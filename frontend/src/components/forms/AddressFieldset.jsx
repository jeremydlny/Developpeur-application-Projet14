const AddressFieldset = memo(({ employee, onChange, onStateChange, errors }) => {
    return (
      <fieldset>
        <legend>Address</legend>
        <EmployeeFormInput
          label="Street"
          name="street"
          value={employee.street}
          onChange={onChange}
        />
        <EmployeeFormInput
          label="City"
          name="city"
          value={employee.city}
          onChange={onChange}
        />
        <StateDropdown
          selectedState={employee.state}
          onStateChange={onStateChange}
        />
        <EmployeeFormInput
          label="Zip Code"
          name="zipCode"
          value={employee.zipCode}
          onChange={onChange}
          pattern="\d{5}"
          error={errors.zipCode}
        />
      </fieldset>
    );
  });

  export default AddressFieldset;