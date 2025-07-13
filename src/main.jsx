import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Components/Hero.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Cardio from './Components/pages/Cardio.jsx'
import Fat from './Components/pages/Fat.jsx'
import Heart from './Components/pages/Heart.jsx'
import Strength from './Components/pages/Strength.jsx'
import Bicep from './Components/pages/Workouts/Bicep.jsx'
import Back from './Components/pages/Workouts/Back.jsx'
import Tricep from './Components/pages/Workouts/Tricep.jsx'
import Shoulders from './Components/pages/Workouts/Shoulders.jsx'
import Legs from './Components/pages/Workouts/Legs.jsx'
import Chest from './Components/pages/Workouts/Chest.jsx'
import Rowing from './Components/pages/Cardio/Rowing.jsx'
import StairClimber from './Components/pages/Cardio/StairClimber.jsx'
import Elliptical from './Components/pages/Cardio/Elliptical.jsx'
import Burpees from './Components/pages/FatBurn/Burpees.jsx'
import KettlebagSwing from './Components/pages/FatBurn/KettlebagSwing.jsx'
import MountainClimber from './Components/pages/FatBurn/MountainClimber.jsx'
import InclineTreadmillWalk from './Components/pages/HeartFitness/InclineTreadmillWalk.jsx'
import RopeJumps from './Components/pages/HeartFitness/RopeJumps.jsx'
import IndoorCycling from './Components/pages/HeartFitness/IndoorCycling.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element:<App />
  },
  {
    path: "/Cardio",
    element:<Cardio />
  },
  {
    path: "/Strength",
    element:<Strength />
  },
  {
    path: "/Fat",
    element:<Fat />
  },
  {
    path: "/Heart",
    element:<Heart />
  },
  {
    path: "/Biceps",
    element:<Bicep />
  },
  {
    path: "/Back",
    element:<Back />
  },
  {
    path: "/Chest",
    element:<Chest />
  },
  {
    path: "/Tricep",
    element:<Tricep />
  },
  {
    path: "/Shoulders",
    element:<Shoulders />
  },
  {
    path: "/Legs",
    element:<Legs />
  },
  {
    path: "/Rowing",
    element:<Rowing />
  },
  {
    path: "/Stairclimber",
    element:<StairClimber />
  },
  {
    path: "/Elliptical",
    element:<Elliptical />
  },
  {
    path: "/MountainClimber",
    element:<MountainClimber />
  },
  {
    path: "/KettlebagSwing",
    element:<KettlebagSwing />
  },
  {
    path: "/Burpees",
    element:<Burpees />
  },
  {
    path: "/InclineTreadmillWalk",
    element:<InclineTreadmillWalk />
  },
  {
    path: "/RopeJumps",
    element:<RopeJumps />
  },
  {
    path: "/IndoorCycling",
    element:<IndoorCycling />
  },
 

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  {/* <App /> */}
  </StrictMode>,
)
