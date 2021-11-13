export const login = ({ post }) => async (info) => {
  try {
    return await post('/auth/login', { email: info.email, username: info.username })
  } catch (e) {
    console.info(" error at 'login' fecth :", e.message)
    return false
  }
}

export const register = ({ post }) => async (info) => {
  try {
    return (await post('/auth/register', { email: info.email, password: info.password, })).data
  } catch (e) {
    console.info(" error at 'login' fecth :", e.message)
    return false
  }
}