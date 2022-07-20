import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) navigate('/login');
  }, [])

  return (
    <div>List</div>
  )
}

export default List