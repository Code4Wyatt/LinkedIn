
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/sideBar';
import {Row, Col} from 'react-bootstrap'


function App() {
  return (
    <>
    <div className="App">
     <Row>
       <Col xs={12} md={8}>

       </Col>
       <Col xs={12}  md={4}>
         <SideBar />
       </Col>
     </Row>
    </div>
    </>
  );
}

export default App;