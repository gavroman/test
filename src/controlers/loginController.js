import {LoginModel} from 'src/models/login';
import {LoginView} from 'src/views/loginView';
import {EventBus} from 'src/utils/EventBus';

export class LoginController {

  constructor(root) {
    const eventBus = new EventBus();

    this.model = new LoginModel(eventBus)
    this.view = new LoginView(root, eventBus)
  }
}