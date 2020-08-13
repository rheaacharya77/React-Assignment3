import React from "react";
import "./App.css";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import Gallery from './components/Gallery/Gallery';
import Users from './components/Users/Users';

class App extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {
     return (
      <BrowserRouter>
         <Switch>
           <Route path="/gallery" component={Gallery} />
           <Route path="/users" component={Users} /> 
         </Switch>
       </BrowserRouter>
     );
   }
 }
 export default App;

