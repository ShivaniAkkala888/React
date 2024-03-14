
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCourse from './component/Addcourse';
import List from './component/List';
import EditDetails from './component/Editpage';
// import EditDetails from './component/Update';
function App()  {
  return (
    <Router>
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/add">Addcourse</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/List">List</Link>
        </li>
        
       
        
        
      </ul>
    </div>
  </div>
</nav>
</div>
<Routes>
  <Route exact path='/add' element={<AddCourse/>}/>
  <Route exact path='/List' element={<List/>}/>
  <Route exact path='/edit/:id' element={<EditDetails/>}/>
  

</Routes>

    
    
    
    </Router>
  );
}

export default App;
