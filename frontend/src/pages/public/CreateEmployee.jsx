import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { addEmployee } from '@/_Redux/Slices/employeeSlice';
import CustomModal from '@/components/CustomModal';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    department: '',
    startDate: new Date(),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(); // Utiliser dispatch pour envoyer l'action

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setEmployee({
      ...employee,
      startDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee)); // Ajouter l'employé au store Redux
    setIsModalOpen(true); // Ouvrir la modale après création
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Create Employee</h1>
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
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <DatePicker
            selected={employee.startDate}
            onChange={handleDateChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Employee Created!"
      />
    </div>
  );
};

export default CreateEmployee;