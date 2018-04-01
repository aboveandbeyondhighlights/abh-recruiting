class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:5000/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ credentials: credentials })
    });

    return fetch(requst).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
