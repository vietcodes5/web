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

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';

const logo = {
  brand: true,
  title: 'Vietcode',
  url: '/'
}

const pages = [
  {
    title: 'Home',
    url: '/',
    icon: HomeOutlinedIcon,
    component: Home
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
    icon: ReceiptOutlinedIcon,
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
    icon: EventNoteOutlinedIcon,
    component: Events
  },
  {
    title: 'About Us',
    url: '/about',
    icon: InfoOutlinedIcon,
    component: About
  },
]



function App(props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header pages={pages} logo={logo}/>
        <Content pages={pages} />
        {/* <Footer /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
