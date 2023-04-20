const validateEmail = email => {
  const regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/
  return email.match(regex);
}

export default validateEmail;
