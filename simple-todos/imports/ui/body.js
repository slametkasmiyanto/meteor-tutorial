import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({},
      {sort: {createdAt: -1}} // sort the newest tasks at the top
    );
  },
});

Template.body.events({
    'submit .new-task'(event){

    // prevent default browser form submit
    event.preventDefault();

    // get value from form element
    const target = event.target;
    const text = target.text.value;

    // insert a task into the Collection
    Tasks.insert({
      text,
      createdAt: new Date(), // get current time
    });

    // clear the form
    target.text.value = '';
  },
});
