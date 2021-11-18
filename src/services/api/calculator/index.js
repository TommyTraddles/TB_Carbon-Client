export const entry = ({ post }) => async (info) => {
  try {
    return (await post('/auth/calculator', { ...info })).data
  } catch (e) {
    return e.response.data
  }
}