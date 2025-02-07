import React from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const DepartmentDropdown = ({ selectedDepartment, onDepartmentChange }) => {
  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  // Création d'un menu avec `items`
  const items = departments.map((department) => ({
    key: department,
    label: department,
  }));

  return (
    <Dropdown
      menu={{
        items,
        onClick: ({ key }) => onDepartmentChange(key), // Utilisation correcte de `menu`
      }}
      trigger={['click']}
    >
      <Button>
        {selectedDepartment || 'Select Department'} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DepartmentDropdown;