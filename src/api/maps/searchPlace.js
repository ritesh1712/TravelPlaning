const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/'
const access_token = 'pk.eyJ1Ijoibm9uZW1lIiwiYSI6ImNsd3QwdXVjNDAxbzAyanNrdnNmM2l6c2UifQ.yYthI8__O4Oq2POcbCvDnw'
const session_token = '5ccce4a4-av0a7c-943d'

const searchPlace = async (place,limit=6) => {
  try {
    const res = await fetch(`${BASE_URL}suggest?q=${place}?language=en&limit=${limit}&session_token=${session_token}&country=IN&access_token=${access_token}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    return result;

  } catch (error) {
    console.error('Error:', error);
    return { error: error };
  }
};

const getLogAndLat = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}retrieve/${id}?session_token=${session_token}&country=IN&access_token=${access_token}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    return result;

  } catch (error) {
    console.error('Error:', error);
    return { error: error };
  }
};



export { searchPlace,getLogAndLat };

