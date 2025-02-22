import React, { useCallback, useMemo, useState } from 'react';
import { Table, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'antd/dist/reset.css';
import '@/styles/components/EmployeeTable.css';


// Tableau des options de pagination
const PAGE_SIZE_OPTIONS = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '50', label: '50' },
];

// Taille de page par défaut
const DEFAULT_PAGE_SIZE = 10;

// Composant EmployeeTable pour afficher les employés dans un tableau
const EmployeeTable = React.memo(({ data = [] }) => { // Props : data (liste des employés) avec valeur par défaut et mémoisation
  const [searchText, setSearchText] = useState(''); // État du texte de recherche
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE); // État de la taille de page
  const [currentPage, setCurrentPage] = useState(1); // État de la page actuelle

  const formatDate = useCallback((dateString) => { // Fonction de formatage de la date
    if (!dateString) return ''; // Retourne une chaîne vide si la date est vide
    return dayjs(dateString).format('DD/MM/YYYY'); // Formatage de la date avec dayjs
  }, []); // Mémoisation de la fonction de formatage de la date

  const handleSort = useCallback((field) => (a, b) => { // Fonction de tri
    if (field === 'startDate' || field === 'dateOfBirth') { // Si le champ est la date de début ou la date de naissance
      return new Date(a[field]) - new Date(b[field]); // Tri par date
    }
    return a[field].localeCompare(b[field]); // Tri par ordre alphabétique
  }, []); // Mémoisation de la fonction de tri

  const columns = useMemo(() => [ // Colonnes du tableau
    { 
      title: 'First Name', 
      dataIndex: 'firstName', 
      sorter: handleSort('firstName')
    },
    { 
      title: 'Last Name', 
      dataIndex: 'lastName', 
      sorter: handleSort('lastName')
    },
    { 
      title: 'Start Date', 
      dataIndex: 'startDate',
      render: formatDate,
      sorter: handleSort('startDate')
    },
    { 
      title: 'Department', 
      dataIndex: 'department', 
      sorter: handleSort('department')
    },
    { 
      title: 'Date of Birth', 
      dataIndex: 'dateOfBirth',
      render: formatDate
    },
    { title: 'Street', dataIndex: 'street' },
    { title: 'City', dataIndex: 'city' },
    { title: 'State', dataIndex: 'state' },
    { title: 'Zip Code', dataIndex: 'zipCode' },
  ], [formatDate, handleSort]);

  const onSearch = useMemo( // Fonction de recherche avec debounce
    () => debounce((value) => setSearchText(value), 300), // Débounce de 300 ms
    []
  ); // Mémoisation de la fonction de recherche

// Use useMemo for filtered data
  const filteredData = useMemo(() =>  // Données filtrées
    data.filter((item) => // Filtrage des données
      Object.values(item).some( // Vérification de chaque valeur
        (val) => val && val.toString().toLowerCase().includes(searchText.toLowerCase()) // Recherche insensible à la casse dans les valeurs
      )
    ),
    [data, searchText] // Dépendances : données et texte de recherche
  );

  // Utilisation de useCallback pour la gestion de la recherche
  const handleSearch = useCallback((value) => { 
    setSearchText(value);  // Met à jour le texte de recherche
  }, []);

  const paginationDetails = useMemo(() => ({ // Détails de pagination
    startIndex: (currentPage - 1) * pageSize + 1, // Index de début
    endIndex: Math.min(currentPage * pageSize, filteredData.length), // Index de fin
    total: filteredData.length // Total
  }), [currentPage, pageSize, filteredData.length]); // Dépendances : page actuelle, taille de page et données filtrées

  const handlePageSizeChange = useCallback((value) => { // Fonction de gestion de la taille de page
    setPageSize(parseInt(value)); // Met à jour la taille de page
    setCurrentPage(1); // Réinitialise la page actuelle
  }, []); // Mémoisation de la fonction de gestion de la taille de page

  return (
    <div className="employee-table">
      <h1>Current Employees</h1>
      <div className="create-link">
        <Link to="/">Create New Employee</Link>
      </div>

      <div className="table-header">
        <div className="entries-selector">
          <span>Show</span>
          <Select
            defaultValue={String(DEFAULT_PAGE_SIZE)}
            options={PAGE_SIZE_OPTIONS}
            onChange={handlePageSizeChange}
            className="ant-select"
          />
          <span>entries</span>
        </div>

        <Input
          placeholder="Search employees"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
          style={{ width: 300 }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: paginationDetails.total,
          showSizeChanger: false,
          showTotal: () => `Showing ${paginationDetails.startIndex} to ${paginationDetails.endIndex} of ${paginationDetails.total} entries`,
          itemRender: (_, type, originalElement) => {
            if (type === 'prev') return <a>Previous</a>;
            if (type === 'next') return <a>Next</a>;
            return originalElement;
          },
          onChange: setCurrentPage
        }}
        rowKey="id"
        className="ant-table-wrapper"
      />
    </div>
  );
});

export default EmployeeTable;