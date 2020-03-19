import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Content from './components/Content'
import './css/App.css';
import { Container } from '@material-ui/core';

import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';
import Events from './pages/events';

import Series from './templates/Series';
import Event from './templates/Event';
import Post from './templates/Post';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const pages = [
  {
    title: 'Home',
    url: '/',
    component: Home
  },
  {
    title: 'About Us',
    url: '/about',
    component: About
  },
  {
    brand: true,
    title: 'Vietcode',
    url: '/'
  },
  {
    subpage: true,
    url: '/series/:seriesId/:blogId',
    component: Post
  },
  {
    subpage: true,
    url: '/series/:id',
    component: Series
  },
  {
    title: 'News',
    url: '/news',
    component: News
  },
  {
    subpage: true,
    url: '/events/:id',
    component: Event
  },
  {
    title: 'Events',
    url: '/events',
    component: Events
  },
]

function App(props) {
  console.log(ThemeProvider);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header pages={pages} />

        <Container>
          <Content pages={pages} />
          {/* <Footer /> */}
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
