import React from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

// Composant `StateDropdown` pour la sélection de l'état
const StateDropdown = ({ selectedState, onStateChange }) => { // Props : selectedState et onStateChange
    const states = [ // Liste des états
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
        'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ];

  // Création d'un menu avec `items`
  const items = states.map((state) => ({ // Utilisation correcte de `map`
    key: state, // Clé de l'élément
    label: state, // Libellé de l'élément
  })); // Utilisation correcte de `map`

  return ( // Composant Dropdown
    <Dropdown 
      menu={{
        items, // Utilisation correcte de `items`
        onClick: ({ key }) => onStateChange(key), // Utilisation correcte de `menu`
      }}
      trigger={['click']} // Déclenchement du menu au clic
    >
      <Button>
        {selectedState || 'Select State'} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default StateDropdown;