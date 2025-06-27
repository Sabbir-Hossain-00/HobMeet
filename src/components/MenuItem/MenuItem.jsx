/* eslint-disable no-unused-vars */
import { use } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

const MenuItem = ({ label, address, icon: Icon }) => {
  const {isDark} = use(AuthContext)
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `${isDark ? "text-gray-200": "text-gray-600"} flex items-center px-4 py-2 my-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? 'bg-gray-300  text-gray-700' : ''
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem
