const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const {currentTarget} = event;
  const { elements: { email, password }} = currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill all the fields');
  } else {
    console.log(`email: ${email.value}, password: ${password.value}`);
    currentTarget.reset();
  }
})
