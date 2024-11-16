import React from 'react'
import { Outlet } from "react-router-dom";

import Header from '../../components/header';

import { Container, PageContent } from './styles'
import Navbar from '../../components/navbar';
import AddItem from '../../components/add-item';

const App: React.FC = () => (
  <Container>
    <AddItem />
    <Header />
    <PageContent>
      <Outlet />
    </PageContent>
    <Navbar />
  </Container>
)

export default App
