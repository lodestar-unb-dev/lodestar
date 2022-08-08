import axios from "axios";

export const api = axios.create({
  baseURL: 'https://lodestar.aerospace.unb.br/api/json'
})