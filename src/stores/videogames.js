import { defineStore } from 'pinia';
import axios from 'axios';

export const useVideogameStore = defineStore('videogameStore', {
    state: () => ({
      videogames: [],
      isLoading: false,
    }),
    actions: {
      async fetchVideogames(genre) {
        this.isLoading = true;
        try {
          const response = await axios.get('http://localhost:8080/api/v1/videogames', {
            params: {
              genre: genre
            }
          });
          if (response.data && Array.isArray(response.data)) {
            this.videogames = response.data;
          } else {
            console.error('Unexpected response structure:', response.data);
          }
        } catch (error) {
          console.error('Error fetching videogames:', error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  });