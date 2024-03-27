// Content.tsx
import React, { ReactNode } from 'react';
import { Container } from '@mantine/core';
import Header from './components/Header/Header';

interface ContentProps {
  children: ReactNode;  
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main>
              <Header />

      <Container size="lg">
        {children}
      </Container>
    </main>
  );
};

export default Content;
