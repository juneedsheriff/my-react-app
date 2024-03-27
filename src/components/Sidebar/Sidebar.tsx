// Sidebar.tsx
import React from 'react';
import { Container, Text, List, ListItem } from '@mantine/core';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS file

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Container size="md">
        <Text size="lg"   className="sidebar__title">Navigation</Text>
        <List className="sidebar__list">
          <ListItem className="sidebar__item">
            <Link to="/subscribers" className="sidebar__link">Subscribers</Link>
          </ListItem>
          <ListItem className="sidebar__item">
            <Link to="/staff" className="sidebar__link">Staff</Link>
          </ListItem>
        </List>
      </Container>
    </aside>
  );
};

export default Sidebar;
