import axios from "axios";

export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// export const api = {
//   // getPokemons: async () => {
//   //   const request = axios.create({
//   //     baseURL: "https://pokeapi.co/api/v2",
//   //     params: {
//   //       limit: 10,
//   //     },
//   //   });

//   //   const req = await request(`/pokemon`);
//   //   return req.data;
//   // },
// };
