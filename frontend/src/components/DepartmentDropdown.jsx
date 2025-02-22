import React from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

// Composant `DepartmentDropdown` pour la sélection du département
const DepartmentDropdown = ({ selectedDepartment, onDepartmentChange }) => { // Props : selectedDepartment et onDepartmentChange
  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']; // Liste des départements

  // Création d'un menu avec `items`
  const items = departments.map((department) => ({ // Utilisation correcte de `map`
    key: department,  // Clé de l'élément
    label: department, // Libellé de l'élément
  }));

  return ( // Composant Dropdown
    <Dropdown 
      menu={{ // Menu avec les items
        items, // Utilisation correcte de `items`
        onClick: ({ key }) => onDepartmentChange(key), // Utilisation correcte de `menu`
      }} 
      trigger={['click']} // Déclenchement du menu au clic
    >
      <Button> 
        {selectedDepartment || 'Select Department'} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DepartmentDropdown;