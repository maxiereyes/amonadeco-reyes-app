/* eslint-disable no-useless-escape */
export const ValidationEmail = (email) => {
  const regExEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regExEmail.test(email);
};

export const ValidationConfirmEmail = (emailOrigin, emailConfirm) => {
  return emailConfirm === emailOrigin;
};

export const ValidationPhone = (phone) => {
  const regExPhone = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

  return regExPhone.test(phone);
};
