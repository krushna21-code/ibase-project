const api = async (u, o = {}) => {
  o.headers = {
    'Content-Type': 'application/json',
    ...(o.headers || {})
  };

  if (localStorage.token) {
    o.headers.Authorization = 'Bearer ' + localStorage.token;
  }

  let r = await fetch('/api' + u, o);
  let x = await r.json();

  if (!r.ok) {
    throw Error(x.message || 'Request failed');
  }

  return x;
};

function auth() {
  if (!localStorage.token) {
    location = '/login.html';
  }
}

function logout() {
  localStorage.clear();
  location = '/';
}
