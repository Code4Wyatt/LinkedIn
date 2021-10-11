
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar';
import {Row, Col} from 'react-bootstrap'
import ProfileJumbotron from './components/ProfileJumbotron'


function App() {
  return (
    <>
    <div className="App">
     <Row>
       <Col xs={12} md={8}>
        <ProfileJumbotron />
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