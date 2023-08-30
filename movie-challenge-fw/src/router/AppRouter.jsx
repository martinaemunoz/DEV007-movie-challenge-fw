import {Routes, Route} from 'react-router-dom';
//import About from '../pages/About';
import Home from '../pages/home';
//import AllMovies from '../pages/AllMovies';


function AppRouter() {
    return (
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/home' element= {<Home />}/>
            {/*<Route path='/AllMovies' element= {<AllMovies/>}/>
            <Route path='/About' element= {<About />}/>*/}
        </Routes>
    )
}

export default AppRouter;