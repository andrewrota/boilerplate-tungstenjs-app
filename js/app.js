import { AppView } from './views/app_view';
import { AppModel } from './models/app_model';
import template from '../templates/app.mustache';

new AppView({
  el: document.getElementById('appwrapper'),
  template: template,
  model: new AppModel(window.data)
});