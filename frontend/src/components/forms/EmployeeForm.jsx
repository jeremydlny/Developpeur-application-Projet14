import React, { memo } from 'react';
import { Form, Button } from 'antd';
import PersonalInfoFields from '@/components/forms/PersonalInfoFields';
import AddressFields from '@/components/forms/AddressFields';
import DepartmentField from '@/components/forms/DepartmentField';

import '@/styles/components/forms/EmployeeForm.css';

/**
 * Composant de formulaire pour la création d'un employé.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onSubmit - Fonction appelée lors de la soumission du formulaire.
 * @returns {JSX.Element} Le composant de formulaire d'employé.
 */
const EmployeeForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      layout="vertical"
      requiredMark="optional"
    >
      <PersonalInfoFields />
      <AddressFields />
      <DepartmentField />
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(EmployeeForm);