import React, { memo } from 'react';
import { Form, Button } from 'antd';
import PersonalInfoFields from '@/components/forms/PersonalInfoFields';
import AddressFields from '@/components/forms/AddressFields';
import DepartmentField from '@/components/forms/DepartmentField';

import '@/styles/components/forms/EmployeeForm.css';

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