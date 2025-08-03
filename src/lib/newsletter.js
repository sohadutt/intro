import api from '../api'

export async function subscribeToNewsletter(email) {
  const res = await api.post('/api/newsletter/signup/', { email });
  return res.data;
}
