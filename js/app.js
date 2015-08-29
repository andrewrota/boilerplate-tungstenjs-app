import { AppView } from './views/app_view';
import { AppModel } from './models/app_model';
import template from '../templates/app.mustache';

new AppView({
  el: '#appwrapper',
  template: template,
  model: new AppModel(window.data)
});