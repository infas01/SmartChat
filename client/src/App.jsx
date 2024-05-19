import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='chat' element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
