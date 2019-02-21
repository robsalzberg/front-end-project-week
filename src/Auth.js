import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'rob-lambda-notes.auth0.com',
    clientID: 'o0qVR11rVDyOGiHeHCKLCUwO17KvJi4d',
    redirectUri: 'https://zen-knuth-c4274b.netlify.com/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
}