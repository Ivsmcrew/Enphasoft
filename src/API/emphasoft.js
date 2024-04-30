class EmphasoftAPI {
  static emphasoftCDN = 'https://test-assignment.emphasoft.com/api/v1';

static async login(user) {
    let response = await fetch(`${this.emphasoftCDN}/login/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    if (response.ok) { 
      let tokenObject = await response.json();
      return tokenObject.token
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  static async getUsers(token) { 
    let response = await fetch(`${this.emphasoftCDN}/users/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Token ' + token,
      },
    })
    if (response.ok) { 
      let users = await response.json();
      return users
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
}

export default EmphasoftAPI