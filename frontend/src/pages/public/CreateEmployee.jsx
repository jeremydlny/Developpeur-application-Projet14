import React, { useState, useCallback, memo } from 'react';
import { Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CustomModal } from '@jeremydlny/custommodal';
import '@jeremydlny/custommodal/styles';
import EmployeeForm from '@/components/forms/EmployeeForm';
import { addEmployee } from '@/_Redux/Slices/employeeSlice';
import dayjs from 'dayjs';

const { Title } = Typography;

/**
 * Composant CreateEmployee
 * 
 * Ce composant permet de créer un nouvel employé en utilisant un formulaire.
 * Lors de la soumission du formulaire, les données de l'employé sont formatées et envoyées à l'action `addEmployee`.
 * Une fois l'employé ajouté avec succès, une modal de confirmation s'affiche.
 * 
 * @component
 * 
 * @returns {JSX.Element} Le composant CreateEmployee.
 * 
 * @example
 * <CreateEmployee />
 */
const CreateEmployee = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (values) => {
    const formattedEmployee = {
      ...values,
      dateOfBirth: values.dateOfBirth?.toISOString(), // Conversion de la date de naissance
      startDate: values.startDate?.toISOString(), // Conversion de la date de début
      id: `EMP${Date.now()}`,
      createdAt: new Date().toISOString()
    };

    try {
      await dispatch(addEmployee(formattedEmployee));
      setShowModal(true);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }, [dispatch]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    navigate('/employee-list');
  }, [navigate]);

  return (
    <div className="create-employee">
      <Title>HRnet</Title>
      <Link to="/employee-list">View Current Employees</Link>
      
      <Title level={2}>Create Employee</Title>
      <EmployeeForm onSubmit={handleSubmit} />
      
      <CustomModal
        show={showModal}
        message="Employee Created Successfully!"
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default memo(CreateEmployee);