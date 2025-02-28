import React, { memo } from 'react';
import { Form, Input, DatePicker } from 'antd';

import '@/styles/components/forms/PersonalInfoFields.css';

const dateFormat = 'DD/MM/YYYY';

const PersonalInfoFields = () => (
  <>
    <Form.Item
      name="firstName"
      label="First Name"
      rules={[{ required: true, message: 'Please input your first name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="lastName"
      label="Last Name"
      rules={[{ required: true, message: 'Please input your last name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="dateOfBirth"
      label="Date of Birth"
      rules={[{ required: true, message: 'Please select your date of birth!' }]}
    >
      <DatePicker 
        style={{ width: '100%' }} 
        format={dateFormat}
        placeholder="DD/MM/YYYY"
      />
    </Form.Item>

    <Form.Item
      name="startDate"
      label="Start Date"
      rules={[{ required: true, message: 'Please select your start date!' }]}
    >
      <DatePicker 
        style={{ width: '100%' }} 
        format={dateFormat}
        placeholder="DD/MM/YYYY"
      />
    </Form.Item>
  </>
);

export default memo(PersonalInfoFields);