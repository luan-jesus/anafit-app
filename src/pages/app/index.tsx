import React from 'react'

import Header from '../../components/header';

import { Container, PageContent } from './styles'
import Navbar from '../../components/navbar';

const App: React.FC = () => (
  <Container>
    <Header />
    <PageContent>Conteúdo</PageContent>
    <Navbar />
  </Container>
)

export default App
