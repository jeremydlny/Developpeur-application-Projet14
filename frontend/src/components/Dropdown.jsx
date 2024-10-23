import React from 'react';

const Dropdown = ({ selectedDepartment, onDepartmentChange }) => {
  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  return (
    <select value={selectedDepartment} onChange={(e) => onDepartmentChange(e.target.value)}>
      <option value="" disabled>Select Department</option>
      {departments.map((department) => (
        <option key={department} value={department}>
          {department}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;