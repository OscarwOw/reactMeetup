import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';


function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllMeetupsPage />} />
                <Route path="/new-meetup" element={<NewMeetup />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Layout>
    );
}

export default App;
