export const users = ({ get }) => async () => {
  try {
    return (await get('/')).data
  } catch (e) {
    return e.response
  }
}

export const user = ({ get }) => async (id) => {
  try {
    return (await get(`/${id}`)).data
  } catch (e) {
    return e.response
  }
}

export const comparative = ({ get }) => async (id, context) => {
  try {
    return (await get(`/`),{ id, context} ).data
  } catch (e) {
    return e.response
  }
}