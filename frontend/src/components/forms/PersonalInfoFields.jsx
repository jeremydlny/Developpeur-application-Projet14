import React, { memo } from 'react';
import { Form, Input, DatePicker } from 'antd';

import '@/styles/components/forms/PersonalInfoFields.css';

const dateFormat = 'DD/MM/YYYY';

/**
 * Composant fonctionnel représentant les champs de formulaire pour les informations personnelles.
 * 
 * @component
 * @example
 * return (
 *   <PersonalInfoFields />
 * )
 * 
 * @returns {JSX.Element} Les champs de formulaire pour le prénom, le nom, la date de naissance et la date de début.
 * 
 * @description
 * Ce composant rend quatre champs de formulaire utilisant Ant Design:
 * - Prénom (firstName)
 * - Nom (lastName)
 * - Date de naissance (dateOfBirth)
 * - Date de début (startDate)
 * 
 * Chaque champ est requis et affiche un message d'erreur personnalisé si le champ n'est pas rempli.
 */
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