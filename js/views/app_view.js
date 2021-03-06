/**
 * App View
 */
'use strict';

import { View } from 'tungstenjs';
import {on} from '../decorators';
import _ from 'underscore';

export class AppView extends View {
  @on('click')
  handleClick() {
    this.model.set('name', 'Andrew');
  }
}