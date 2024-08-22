function passwordValidation() {
  let password = document.getElementById('pwd').value;
  let confirmPassword = document.getElementById('con-pwd').value;

  if (password != confirmPassword) {
    document.getElementById('wrongPass').style.color = 'red';
    document.getElementById('wrongPass').innerText = '* Passwords do not match';
    document.getElementById('button').disabled = true;
    document.getElementById('button').style.opacity = 0.3;
  } else {
    document.getElementById('wrongPass').style.color = 'green';
    document.getElementById('wrongPass').innerText = 'Password Matched';
    document.getElementById('button').disabled = false;
    document.getElementById('button').style.opacity = 1;
  }
}

function wrongPassAlert() {
  if (
    document.getElementById('password').value != '' &&
    document.getElementById('confirmPassword').value != ''
  ) {
    alert('Submitted');
  } else {
    alert('Please fill in all fields');
  }
}
