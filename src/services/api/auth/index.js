export const login = ({ post }) => async (info) => {
  try {
    return (await post('/auth/login', { ...info })).data
  } catch (e) {
    return e.response.data
  }
}

export const register = ({ post }) => async (info) => {
  try {
    return (await post('/auth/register', { ...info} )).data
  } catch (e) {
    return e.response.data
  }
}