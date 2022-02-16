import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} 
from "react-router-dom";
import Home from "./data/Home";
import Appointments from "./data/Appointments";
import Events from "./data/Events";
import Doctors from './data/Doctors';
import Clients from './data/Clients';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from "react-bootstrap";
import {Carousel} from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <div className="navig">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="home">Главная</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="events">Заболевания</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="appointments">Определение болезни</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="clients">Наши клиенты</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="doctors">Наши врачи</Nav.Link>
          </Nav.Item>
        </Nav>               
        <Routes>
          <Route exact path="home" element={<Home />}></Route>
          <Route exact path="appointments" element={<Appointments />}></Route>
          <Route exact path="doctors" element={<Doctors />}></Route>
          <Route exact path="events" element={<Events />}></Route>
          <Route exact path="clients" element={<Clients />}></Route>
        </Routes>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <a href="doctors">
              <img
                className="d-block w-100"
                src="https://s0.tchkcdn.com/g-hQkLKm5DKoMwwLS2HK9dNw/8/226056/1200x630/f/0/417660_4.jpg"
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="clients">
              <img
                className="d-block w-100"
                src="https://incrussia.ru/wp-content/uploads/2017/10/picture-front.jpg"
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="events">
              <img
                className="d-block w-100"
                src="https://indicator.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2019/08/13/13/3515049/f442980454c040bfb567610334d2a83de08e3245.jpg"
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </Router>
  );
}