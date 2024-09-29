import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const token = ref('');
    const username = ref('');
    const userRole = ref('');
    const errorMessage = ref('');

    const loginEndpoint = 'http://localhost:8080/api/v1/login';

    async function login(user, password) {
        try {
          const response = await axios.get(loginEndpoint, {
            auth: {
              username: user,
              password: password
            },
            withCredentials: true
          });

          token.value = response.data.token || '';
          username.value = response.data.Username;
          userRole.value = response.data.role;
          isAuthenticated.value = true;
          errorMessage.value = '';

          localStorage.setItem('authToken', token.value);
        } catch (error) {
          isAuthenticated.value = false;
          errorMessage.value = 'Invalid username or password';
          console.error('Login error:', error);
        }
      }

      const logoutEndpoint = 'http://localhost:8080/api/v1/logout';

      async function logout() {
        try {
            const response = await axios.get(logoutEndpoint, {
                withCredentials: true
            })
        
        isAuthenticated.value = false;
        token.value = '';
        username.value = '';
        userRole.value = '';
    
        localStorage.removeItem('authToken');
      } catch (error) {
        console.error('Login error:', error);
      }
    }
      return { isAuthenticated, token, username, userRole, errorMessage, login, logout};
    });