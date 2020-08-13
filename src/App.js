import React from "react";
import "./App.css";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './contents/Home/Home';
import Gallery from './contents/Gallery/Gallery';
import Users from './contents/Users/Users';

class App extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {
     return (
      <BrowserRouter>
         <div className="App">
         <Switch>
            <Route exact path="/gallery" component={Gallery} />
           <Route exact path="/users" component={Users} />  
         </Switch>
         <Navbar/>
         <Home />
         </div>
       </BrowserRouter>
     );
   }
 }
 export default App;

