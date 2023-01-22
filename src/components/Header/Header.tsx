import { Link } from "react-router-dom"
import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <Link to="/">G-JOBS.GE</Link>
        </div>
    </div>
  )
}

