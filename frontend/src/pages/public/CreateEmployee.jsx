import React, { useState, useCallback, useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '@/_Redux/Slices/employeeSlice';
import DatePicker from '@/components/DatePicker';
import DepartmentDropdown from '@/components/DepartmentDropdown';
import StateDropdown from '@/components/StateDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { CustomModal } from '@jeremydlny/custommodal';
import '@jeremydlny/custommodal/styles';
import '@/styles/pages/CreateEmployee.css';

const ValidationError = memo(({ error }) => {
  if (!error) return null;
  return <span className="error-message">{error}</span>;
});

const initialEmployeeState = {
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  startDate: null,
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
};

const departmentOptions = [
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'legal', label: 'Legal' }
];

const CreateEmployee = () => {
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [showModal, setShowModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Ajout de la mémoisation des options de département
  const memoizedDepartmentOptions = useMemo(() => departmentOptions, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmployee = useMemo(() => (employeeData) => {
    const errors = {};

    // Validation du prénom et nom
    if (employeeData.firstName.length < 2) errors.firstName = 'First name must be at least 2 characters long';
    if (employeeData.lastName.length < 2) errors.lastName = 'Last name must be at least 2 characters long';

    // Validation de l'âge
    if (!employeeData.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
    } else {
      const birthDate = new Date(employeeData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear(); // Changed from const to let
      const monthDiff = today.getMonth() - birthDate.getMonth();

      // Adjust age if birthday hasn't occurred this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        errors.dateOfBirth = 'Employee must be at least 18 years old';
      } else if (birthDate >= today) {
        errors.dateOfBirth = 'Invalid date of birth';
      }
    }

    // Autres validations
    if (!employeeData.startDate || employeeData.startDate <= new Date()) errors.startDate = 'Start date must be in the future';
    if (!employeeData.department) errors.department = 'Department is required';
    if (!/^\d{5}$/.test(employeeData.zipCode)) errors.zipCode = 'Zip code must be 5 digits';

    return errors;
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleDateChange = useCallback((date, field) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: date,
    }));
  }, []);

  const handleDropdownChange = useCallback((value, field) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setEmployee(initialEmployeeState);
    setValidationErrors({});
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    resetForm();
    navigate('/employee-list');
  }, [navigate, resetForm]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errors = validateEmployee(employee);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const formattedEmployee = {
      ...employee,
      dateOfBirth: employee.dateOfBirth?.toISOString(),
      startDate: employee.startDate?.toISOString(),
      id: `EMP${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    try {
      await dispatch(addEmployee(formattedEmployee));
      setShowModal(true);
    } catch (error) {
      console.error('Error adding employee:', error);
      setValidationErrors({ submit: 'Failed to create employee' });
    }
  }, [employee, dispatch, validateEmployee]);

  return (
    <div className="create-employee">
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      {validationErrors.submit && <ValidationError error={validationErrors.submit} />}

      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
          <ValidationError error={validationErrors.firstName} />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
          <ValidationError error={validationErrors.lastName} />
        </label>

        <label>
          Date of Birth:
          <DatePicker
            selectedDate={employee.dateOfBirth}
            onChange={(date) => handleDateChange(date, 'dateOfBirth')}
          />
          <ValidationError error={validationErrors.dateOfBirth} />
        </label>

        <label>
          Start Date:
          <DatePicker
            selectedDate={employee.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
          />
          <ValidationError error={validationErrors.startDate} />
        </label>

        <fieldset>
          <legend>Address</legend>
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={employee.street}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={employee.city}
              onChange={handleChange}
            />
          </label>
          <label>
            State:
            <StateDropdown
              selectedState={employee.state}
              onStateChange={(state) => handleDropdownChange(state, 'state')}
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
              pattern="\d{5}"
            />
            <ValidationError error={validationErrors.zipCode} />
          </label>
        </fieldset>

        <label>
          Department:
          <DepartmentDropdown
            selectedDepartment={employee.department}
            onDepartmentChange={(department) => handleDropdownChange(department, 'department')}
            options={memoizedDepartmentOptions}
          />
          <ValidationError error={validationErrors.department} />
        </label>

        <button type="submit">Create</button>
      </form>

      <CustomModal
        show={showModal}
        message="Employee Created Successfully!"
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default memo(CreateEmployee);