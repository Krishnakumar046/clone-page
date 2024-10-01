import App from './App.jsx'
import ReactDom from 'react-dom/client'
import Usecontext from './components/Usecontext.jsx';
import './index.css'


ReactDom.createRoot(document.getElementById('root')).render(
  <Usecontext>
    <App />
  </Usecontext>

);
