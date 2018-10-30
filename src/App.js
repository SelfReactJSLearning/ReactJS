import React, { Component } from 'react';
import './App.css';
import { Layout,Navigation,Header,Drawer,Content,Footer } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                {/* <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a> */}
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/section">Section</Link>
                <Link to="/sidenav">Section1</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
        <Footer title="Title" scroll>
            <Navigation>
               <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Footer>
    </Layout>
</div>
      // <div className="App">
      //   <header className="App-header">
      //   header
      //    </header>
      //    <section>

      //    </section>
      //     <footer>
          
      //     </footer>

      // </div>
    );
  }
}

export default App;
