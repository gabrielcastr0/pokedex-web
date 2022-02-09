import axios from "axios";

export const api = {
  getPokemons: async (offset: number | undefined) => {
    const request = axios.create({
      baseURL: "https://pokeapi.co/api/v2/",
      params: {
        limit: 10,
        offset,
      },
    });

    const req = await request(`/pokemon`);
    return req.data;
  },
};

export default api;
