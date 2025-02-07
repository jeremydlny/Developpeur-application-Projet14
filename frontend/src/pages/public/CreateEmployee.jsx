import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '@/_Redux/Slices/employeeSlice';
import DatePicker from '@/components/DatePicker';
import DepartmentDropdown from '@/components/DepartmentDropdown'; // Renommé
import StateDropdown from '@/components/StateDropdown'; // Renommé pour les états
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CustomModal } from '@jeremydlny/custommodal';
import '@jeremydlny/custommodal/styles';

import '@/styles/pages/CreateEmployee.css';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleDateOfBirthChange = (date) => {
    setEmployee({
      ...employee,
      dateOfBirth: date,
    });
  };

  const handleStartDateChange = (date) => {
    setEmployee({
      ...employee,
      startDate: date,
    });
  };

  const handleDepartmentChange = (department) => {
    setEmployee({
      ...employee,
      department,
    });
  };

  const handleStateChange = (state) => {
    setEmployee({
      ...employee,
      state,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedEmployee = {
      ...employee,
      dateOfBirth: employee.dateOfBirth ? employee.dateOfBirth.toISOString() : null,
      startDate: employee.startDate ? employee.startDate.toISOString() : null
    };

    dispatch(addEmployee(formattedEmployee));
    
    console.log("Employee data submitted:", formattedEmployee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/employee-list');
  };

  return (
    <div className="create-employee">
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>

      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
        </label>

        {/* Champ Date of Birth */}
        <label>
          Date of Birth:
          <DatePicker
            selectedDate={employee.dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        </label>

        {/* Champ Start Date */}
        <label>
          Start Date:
          <DatePicker
            selectedDate={employee.startDate}
            onChange={handleStartDateChange}
          />
        </label>

        {/* Section Adresse */}
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
              onStateChange={handleStateChange}
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        {/* Champ Department */}
        <label>
          Department:
          <DepartmentDropdown
            selectedDepartment={employee.department}
            onDepartmentChange={handleDepartmentChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
      <CustomModal show={showModal} message="Employee Created Successfully!" onClose={handleCloseModal} />
    </div>
  );
};

export default CreateEmployee;