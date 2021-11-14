export const login = ({ post }) => async (info) => {
  try {
    return await post('/auth/login', { ...info })
  } catch (e) {
    console.info(" error at 'login' fetch :", e.message)
    return false
  }
}

export const register = ({ post }) => async (info) => {
  try {
    return await post('/auth/register', { ...info} )
  } catch (e) {
    console.info(" error at 'login' fetch :", e.message)
    return false
  }
}