export const rankingUsers = ({ get }) => async () => {
  try {
    return (await get('/')).data
  } catch (e) {
    return e.response
  }
}