import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from "./Pages/Dashboard"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import SendMoney from "./Pages/SendMoney"
import FrontPage from "./Pages/FrontPage"
import Users from './components/Users'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/send" element={<SendMoney></SendMoney>}></Route>
          <Route path="/" element={<FrontPage></FrontPage>}></Route>
          <Route path="/test" element={<Users></Users>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
