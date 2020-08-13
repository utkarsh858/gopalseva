import axios from 'axios'

const api = axios.create({
    baseURL: 'https://us-central1-gopal-seva.cloudfunctions.net/api',
})

export const submitDonationData = 
(data) => api.post('/data',data)

const apis = {
	submitDonationData,
}

export default apis