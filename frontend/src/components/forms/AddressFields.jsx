import React, { memo } from 'react';
import { Form, Input, Select, Space } from 'antd'; 
import { states } from '@/utils/states';

const { Option } = Select;

/**
 * Composant AddressFields
 *
 * Ce composant rend un ensemble de champs de formulaire pour saisir une adresse.
 * Il inclut les champs suivants :
 * - Rue (Street) : Champ de saisie obligatoire pour la rue.
 * - Ville (City) : Champ de saisie obligatoire pour la ville.
 * - État (State) : Sélecteur obligatoire pour choisir un état parmi une liste.
 * - Code postal (Zip Code) : Champ de saisie obligatoire pour le code postal, qui doit être un nombre à 5 chiffres.
 *
 * @returns {JSX.Element} Le composant AddressFields.
 */
const AddressFields = () => (
  <Form.Item className="address-fields">
    <Form.Item
      name="street"
      label="Street"
      rules={[{ required: true, message: 'Please input your street!' }]}
    >
      <Input placeholder="Street" />
    </Form.Item>

    <Space.Compact block style={{ display: 'flex', gap: '1rem' }}>
      <Form.Item
        name="city"
        label="City"
        rules={[{ required: true, message: 'Please input your city!' }]}
        style={{ flex: 2 }}
      >
        <Input placeholder="City" />
      </Form.Item>

      <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, message: 'Please select your state!' }]}
        style={{ flex: 1 }}
      >
        <Select placeholder="Select state">
          {states.map(state => (
            <Option key={state.value} value={state.value}>
              {state.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="zipCode"
        label="Zip Code"
        rules={[
          { required: true, message: 'Please input your zip code!' },
          { pattern: /^\d{5}$/, message: 'Zip code must be 5 digits!' }
        ]}
        style={{ flex: 1 }}
      >
        <Input placeholder="Zip Code" />
      </Form.Item>
    </Space.Compact>
  </Form.Item>
);

export default memo(AddressFields);