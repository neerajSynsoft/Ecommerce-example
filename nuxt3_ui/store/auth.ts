import { defineStore } from "pinia";

interface User {
  username: string;
  password: string;
  "token": string,
  "_id": string,
  "name": string,
  "phone": string,
  "email": string,
  "monthly_volume": string,
  "createdAt": string,
  "updatedAt": string,
  "__v": 0
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    user: null as User | null
  }),
  actions: {
    async authenticateUser( details: any) {
      // useFetch from nuxt 3
      const { data, pending } = await useFetch<User>('/api/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: details,
      });
      this.loading = pending.value;

      if (data?.value?.token) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = data.value.token; // set token to cookie
        this.user = data.value; // set authenticated  state value to true
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});


// export const useTodosStore = defineStore('todos', () => {
//   const todos = ref([]);  // ref by defaults are states,

//  // functions get added to actions

//   const fetchTodos = async () => { 
//     const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos');
//     if (data.value) {
//       todos.value = data.value;
//     }
//   };

// // we must return what we want to use accross the application
//   return {
//     todos,
//     fetchTodos,
//   };
// });