import {Routes, Route} from 'react-router-dom';
//import About from '../pages/About';
import Header from '../components/header/header';
import Home from '../pages/home';
import './AppRouter.css'
import AllMovies from '../pages/allmovies';


function AppRouter() {
    return (
        <div className="app-container">
        <Header />
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/home' element= {<Home />}/>
            <Route path='/allmovies' element= {<AllMovies/>}/>
            {/*<Route path='/About' element= {<About />}/>*/}
        </Routes>
        </div>
    );
}

export default AppRouter;