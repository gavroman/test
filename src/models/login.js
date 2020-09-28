export class LoginModel {

  constructor(eventBus) {
    this.eventBus = eventBus;
    eventBus.subscribe('SUBMIT_LOGIN', this.doLogin);
  }

  doLogin(input) {
    ApiService.login(input).then((response) => {
      switch(response.status) {
        case 200:
          this.eventBus.call('GET_LOGIN_DATA', response.data);
        case 404:
        case 500:
      }
    })
  }
}