 import React from 'react';
import { Container, Title } from '@mantine/core';

const Header: React.FC = () => {
  return (
    <header>
      <Container size="lg">
        <Title order={1}>Dashboard Header</Title>
      </Container>
    </header>
  );
};

export default Header;
