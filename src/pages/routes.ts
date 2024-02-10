import { createBrowserRouter } from 'react-router-dom'
import HomeScreen from './home/HomeScreen'

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: HomeScreen,
  },
])
