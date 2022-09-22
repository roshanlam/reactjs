import React, {FC} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Layout} from './components';

import HomePage from './pages/HomePage';

const App: FC = () => {
  return(
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;