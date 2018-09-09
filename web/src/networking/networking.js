import axios from 'axios'

export const login = (email, password) => {
  return fetch(`http://localhost:3000/login/${email}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
}
