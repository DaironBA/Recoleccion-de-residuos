import { BrowserRouter, Route, Routes } from "react-router"
import { Provider } from "react-redux"
import store from "./redux/store"
import useAuth from "./hooks/useAuth"
import RouteConfig from "./routes"

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <RouteConfig/>
      </BrowserRouter>
    </Provider>
    </>
  )
}


export default App
