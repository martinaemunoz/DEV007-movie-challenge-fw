import {Routes, Route} from 'react-router-dom';
//import About from '../pages/About';
import Header from '../components/header/header';
import Home from '../pages/home';
import './AppRouter.css'
//import AllMovies from '../pages/AllMovies';


function AppRouter() {
    return (
        <div className="app-container">
        <Header />
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/home' element= {<Home />}/>
            {/*<Route path='/AllMovies' element= {<AllMovies/>}/>
            <Route path='/About' element= {<About />}/>*/}
        </Routes>
        </div>
    );
}

export default AppRouter;