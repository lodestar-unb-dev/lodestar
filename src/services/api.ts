import axios from "axios";

const { NEXT_PUBLIC_SITE_URL } = process.env;

export const api = axios.create({
  baseURL: `${NEXT_PUBLIC_SITE_URL}/api/json`
})