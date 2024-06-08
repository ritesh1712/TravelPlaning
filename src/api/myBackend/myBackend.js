const URL = 'http://localhost:5000/api/auth';

const post = async (endpoint, data) => {
  try {
    const res = await fetch(URL+'/'+endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    return result;

  } catch (error) {
    // console.error('Error:', error);
    return { error: error };
  }
};

export { post };
