import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // initializes React app using createRoot.
import App from './App'
// import Card from './Card'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
  // <StrictMode><App/><Card/></StrictMode>
)

// export default Card
export default App
// export default Card
