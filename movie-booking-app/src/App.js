

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MovieSelection from './components/MovieSelection';
import SeatSelection from './components/SeatSelection';
import Checkout from './components/Checkout';
import AdminPanel from './components/AdminPanel';
import Bookings from './components/Bookings';
import Payment from './components/Payment';
import ScreenManagement from './components/ScreenManagement';
import BookingConfirmation from './components/BookingConfirmation';
import Seats from './components/Seats';
import MenuDisplay from './components/MenuDisplay';
import MovieList from './components/MovieList';





function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/movies" component={MovieSelection} />
          <Route path="/seat-selection" component={SeatSelection} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/booking" component={Bookings} />
          <Route path="/seats" component={Seats} />
          <Route path="/menidisplay" component={MenuDisplay} />
          <Route path="/payment" component={Payment} />
          <Route path="/screenmanagement" component={ScreenManagement} />
          <Route path="/movielist" component={MovieList} />
          <Route path="/bookingconfermation" component={BookingConfirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
