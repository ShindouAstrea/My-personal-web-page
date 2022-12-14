import './App.css';
import Background from './components/views/Background';
import HomePage from './components/views/HomePage';
import DevApps from './components/views/DevApps';
import DevTools from './components/views/DevTools';
import SocialNetWorks from './components/views/SocialNetWorks';
import Jobs from './components/views/Jobs';
import LanguagesPage from './components/views/LanguagesPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Background/>
              <Routes>
                <Route path="/" element ={<NavBarComponent/>}>
                  <Route index element={<HomePage />}/>
                  <Route path="Jobs" element={<Jobs/>}/>
                  <Route path="SocialNetworks" element={<SocialNetWorks/>}/>
                  <Route path="Apps" element={<DevApps/>}/>
                  <Route path="DevTools" element={<DevTools/>}/>
                  <Route path="Languages" element={<LanguagesPage/>}/>
                </Route>
              </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;
