/* eslint-disable no-undef */
import axios from "axios"
import { useState } from "react"

const baseUrl = 'http://localhost:3001/dw_store'

const api = axios.create({
  baseURL: baseUrl
})

api.interceptors.request.use( config => {
    // Promise: objet javascript. Une promesse représente une valeur qui peut être disponible 
    // dans le futur ou jamais. La fonction de rappelle fournie 'resolve' et sera appelée losque la promesse est résolue
    return new Promise( (resolve) => setTimeout( () => resolve(config), 3000)) // Délai de 3s
})

export const useAxios = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);
    try {
      const response = await requestFunction(...args);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  const get = (endpoint) => handleRequest(api.get, endpoint);
  const post = (endpoint, data) => handleRequest(api.post, endpoint, data);
  const put = (endpoint, id, data) => handleRequest(api.put, `${endpoint}/${id}`, data);
  const remove = (endpoint, id) => handleRequest(api.delete, `${endpoint}/${id}`);
  
  return {
    loading,
    error,
    get,
    post,
    put,
    remove
  }
}