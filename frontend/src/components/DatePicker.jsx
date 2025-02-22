// DatePicker.jsx

import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import dayjs from 'dayjs'; // Si vous devez manipuler des dates dans le state
import 'dayjs/locale/fr';
import locale from 'antd/es/date-picker/locale/fr_FR';

// Configuration de la langue de dayjs
dayjs.locale('fr');

// Composant DatePicker personnalisé pour l'application (utilise AntdDatePicker)
const DatePicker = ({ selectedDate, onChange }) => { // Props : selectedDate et onChange
  const handleDateChange = (date) => {  // Fonction de gestion de la date
    onChange(date); // Renvoie la date sélectionnée via le prop onChange
  };

  return ( // Composant AntdDatePicker
    <AntdDatePicker 
      value={selectedDate ? dayjs(selectedDate) : null} // Conversion de la date avec dayjs
      onChange={handleDateChange}
      format="DD/MM/YYYY" // Format d'affichage de la date
      locale={locale}
      style={{ width: '100%' }}
      placeholder="Sélectionner une date"
      allowClear={true}
      inputReadOnly={true}
      showToday={true}
    />
  );
};

export default DatePicker;