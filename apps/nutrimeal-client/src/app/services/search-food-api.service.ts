import axios from 'axios';

async function getUser() {
  try {
    const response = await axios.post('/user?ID=12345', {});
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
