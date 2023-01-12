import axios from 'axios'




//creating new client
export const createClient = async (client) => {
  return await axios.post(`/api/client`, client)
}


//creating new request
export const createRequest = async (request) => {
  return await axios.post(`/api/request`, request)
}


//creating new quote
export const createQuote = async (quote) => {
  return await axios.post(`/api/quote`, quote)
}




