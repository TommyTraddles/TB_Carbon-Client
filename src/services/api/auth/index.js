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

export const forgot = ({ post }) => async (info) => {
  try {
    return (await post('/auth/forgot-pass', { ...info} )).data
  } catch (e) {
    return e.response.data
  }
}

export const reset = ({ post }) => async ({token, email}, info) => {
  try {
    return (await post(`/auth/password/request?token=${token}&email=${email}`, { ...info} )).data
  } catch (e) {
    return e.response.data
  }
}