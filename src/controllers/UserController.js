import HttpClient from './HttpClient';

class UserController {
  createInterestedUser = (email, name, phone, subject, contactMessage) => {
    const result = HttpClient.post(
      `/interested_users`,
      {
        email,
        name,
        phone,
        subject,
        contactMessage
      }
    );
    return result;
  };
}

export default new UserController();
