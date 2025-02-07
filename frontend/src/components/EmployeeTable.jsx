import React from 'react';
import { Table, Input, Button, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';

const EmployeeTable = ({ data }) => {
  // Données de test avec 50 entrées
  const mockData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    firstName: `Employee${index + 1}`,
    lastName: `LastName${index + 1}`,
    startDate: `2020-${(index % 12) + 1}-${(index % 28) + 1}`,
    department: ['Sales', 'Engineering', 'Marketing', 'Human Resources', 'IT'][index % 5],
    dateOfBirth: `199${index % 9}-${(index % 12) + 1}-${(index % 28) + 1}`,
    street: `${index + 100} Main St`,
    city: ['New York', 'San Francisco', 'Chicago', 'Boston', 'Seattle'][index % 5],
    state: ['NY', 'CA', 'IL', 'MA', 'WA'][index % 5],
    zipCode: `${10000 + index}`
  }));

  const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName', sorter: (a, b) => a.firstName.localeCompare(b.firstName) },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName', sorter: (a, b) => a.lastName.localeCompare(b.lastName) },
    { title: 'Start Date', dataIndex: 'startDate', key: 'startDate', sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate) },
    { title: 'Department', dataIndex: 'department', key: 'department', sorter: (a, b) => a.department.localeCompare(b.department) },
    { title: 'Date of Birth', dataIndex: 'dateOfBirth', key: 'dateOfBirth' },
    { title: 'Street', dataIndex: 'street', key: 'street' },
    { title: 'City', dataIndex: 'city', key: 'city' },
    { title: 'State', dataIndex: 'state', key: 'state' },
    { title: 'Zip Code', dataIndex: 'zipCode', key: 'zipCode' },
  ];

  const [searchText, setSearchText] = React.useState('');
  const [pageSize, setPageSize] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onSearch = (value) => {
    setSearchText(value);
  };

  // Utilisation de mockData au lieu de data
  const filteredData = mockData.filter((item) =>
    Object.values(item).some(
      (val) => val && val.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Calcul des indices pour l'affichage "Showing X to Y of Z entries"
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, filteredData.length);
  const total = filteredData.length;

  return (
    <div className="employee-table">
      <h1>Current Employees</h1>

      {/* Ajout du lien vers Create Employee */}
      <div className="create-link">
        <Link to="/">Create New Employee</Link>
      </div>

      {/* Conteneur flex pour le header de la table */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }}>
        {/* Sélecteur du nombre d'entrées */}
        <div>
          <span style={{ marginRight: 8 }}>Show</span>
          <Select
            defaultValue="10"
            style={{ width: 80, marginRight: 8 }}
            options={[
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '30', label: '30' },
              { value: '50', label: '50' },
            ]}
            onChange={(value) => {
              setPageSize(parseInt(value));
              setCurrentPage(1);
            }}
          />
          <span>entries</span>
        </div>

        {/* Barre de recherche */}
        <Input
          placeholder="Search employees"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 300 }}
        />
      </div>

      {/* Table Ant Design */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredData.length,
          showSizeChanger: false,
          showTotal: () => `Showing ${startIndex} to ${endIndex} of ${total} entries`,
          itemRender: (page, type, originalElement) => {
            if (type === 'prev') {
              return <a>Previous</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          },
          onChange: (page) => setCurrentPage(page)
        }}
        rowKey={(record) => record.id}
      />

    </div>
  );
};

export default EmployeeTable;