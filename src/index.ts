import './assets/styles/main.css'
import './assets/favicon/favicon-webpack.png'

import axios from 'axios'

const getUsers = async () => {
  const res = await axios.get('https://dlfkjf-8080.csb.app/users')
  console.log(res.data);
}

getUsers()