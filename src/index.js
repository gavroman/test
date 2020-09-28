import {LoginController} from 'src/controlers/loginController';

const root = document.getElementById('root');


const loginController = new LoginController(root);
const restaurantController = new RestaurantController(root);
const profileController = new ProfileController(root);

loginController.view.render();