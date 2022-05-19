import axios from 'axios'

const COUNTRYAPIURL = 'http://api.geonames.org/'
const APIKEY = process.env.APININJAS_API_KEY || ''
const CITYAPIURL = 'https://api.api-ninjas.com/v1'
if (!APIKEY) {
  console.error('APIKEY value is not set in env file')
}

export const countryApi = axios.create({
  baseURL: COUNTRYAPIURL,
  params: {
    username: 'weknowit',
    maxRows: 15,
    orderby: 'population'
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const cityApi = axios.create({
  baseURL: CITYAPIURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': APIKEY
  }
})
