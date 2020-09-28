
class LoginViewTemplate {
  static render(data) {
    return '<div><input type="text" class="js-input-login"><input type="text" class="js-input-password">' +
      '<button class="js-submit-login"></div>';
  }
}

export class LoginView {
  constructor(root, eventBus) {
    this.eventBus = eventBus;
    this.root = root;

    this.eventBus.subscribe('GET_LOGIN_DATA', this.render);

  }

  render(data) {
    this.root.innerHTML = LoginViewTemplate.render(data);
    this.addEventListeners();
  }


  addEventListeners() {
    const login = this.root.querySelector('.js-input-login');
    const password = this.root.querySelector('.js-input-password');
    const button =  this.root.querySelector('.js-submit-login');

    button.addEventListener('click', () => {
      if (validateLogin(login.value) && validatePassword(password.value)) {
        const data = {login: login.value, password: password.value};
        this.eventBus.call('SUBMIT_LOGIN', data);
      }
    })
  }
}