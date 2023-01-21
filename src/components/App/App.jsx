import { Routes, Route } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Header from '../Header';
import Home from '../Home';
import Search from '../Search';
import SearchList from '../SearchList';
const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/list"
          element={<SearchList title="Поиски за все время" />}
        />
        <Route path="*" element={<span>Not found</span>} />
      </Routes>
      <NotificationContainer></NotificationContainer>
    </>
  );
};

export default App;
