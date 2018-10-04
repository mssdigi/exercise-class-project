console.log('main.js has been called')


console.log(users[0].username)

document.getElementById('loginResult').textContent = 'You need to log in'


document.getElementById('submit').onclick = function(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // CHECK IF USERNAME AND PASSWORD HAVE BEEN ENTERED
    if(username.length == 0 || password.length == 0) {
      document.getElementById('loginResult').textContent = 'Username or Password is missing';
      return false;
    }
   
    // CHECK IF USERNAME AND PASSWORD MATCH USER DATABASE
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        document.getElementById('loginResult').textContent = 'Login successful';
        window.location.href = 'profile.html'
        return true;
    }}
    
    // NO CORRECT USER SHOWED UP IN THE DATABASE
    document.getElementById('loginResult').innerText = 'Username or Password is wrong!';
  
  };
  
  