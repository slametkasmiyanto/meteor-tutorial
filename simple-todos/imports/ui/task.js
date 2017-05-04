import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
  'click .toggle-checked'(){

    // set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: {checked: !this.checked},
    });
  },

  // remove record in the Collection
  'click .delete'(){
    Tasks.remove(this._id);
  }
});
