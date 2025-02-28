import React, { memo } from 'react';
import { Form, Select } from 'antd';

import '@/styles/components/forms/DepartmentField.css';

const { Option } = Select;

const departmentOptions = [
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'legal', label: 'Legal' }
];

const DepartmentField = () => (
  <Form.Item
    name="department"
    label="Department"
    rules={[{ required: true, message: 'Please select a department!' }]}
  >
    <Select placeholder="Select department">
      {departmentOptions.map(dept => (
        <Option key={dept.value} value={dept.value}>
          {dept.label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

export default memo(DepartmentField);