// DatePicker.jsx

import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import dayjs from 'dayjs'; // Si vous devez manipuler des dates dans le state

const DatePicker = ({ selectedDate, onChange }) => {
  const handleDateChange = (date) => {
    onChange(date); // Renvoie la date sélectionnée via le prop onChange
  };

  return (
    <AntdDatePicker
      value={selectedDate ? dayjs(selectedDate) : null} // Conversion de la date avec dayjs
      onChange={handleDateChange}
      format="DD/MM/YYYY" // Format d'affichage de la date
    />
  );
};

export default DatePicker;