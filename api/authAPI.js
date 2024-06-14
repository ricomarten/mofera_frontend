import axios from 'axios'
import {URL} from "./APIconst"
import { Link } from 'react-router-dom';

export const register = async (data) => {
    try{
        const response = await axios.post(URL + '/auth/', {
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
        centra_unit: data.centra_unit
        });

        return response
    } catch (error) {
      console.error('Sign u failed:', error)
    }

 
}

export const login = async (formData) => {
    try {
        const response = await axios.post(URL + '/auth/token', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log("Successful login", response.data);
        const { access_token, username } = response.data;
        localStorage.setItem('token', access_token);
        localStorage.setItem('username', username);
  
        return response
      } catch (error) {
        console.error('Login failed:', error);
      }

}