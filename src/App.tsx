import './App.css';
import { Route, Routes } from 'react-router';
import FollowMyLore from './components/FollowMyLore';

function App() {
  return (
    <Routes>
      <Route path="" element={'Home Page'} />
      <Route path="follow-my-lore" element={<FollowMyLore />} />
    </Routes>
  );
}

export default App;
