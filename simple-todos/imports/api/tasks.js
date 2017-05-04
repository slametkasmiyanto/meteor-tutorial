import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

// Automatically creates 1 record  at startup 
// On tutorial (Chapter 3: Collection) we create 1 record manually
// with entering into MongoDB console.
Meteor.startup(function(){
  if (Tasks.find().count() == 0) {
      console.log("Create 1 record..");
      Tasks.insert({
        text: "Hello world!",
        createdAt: new Date(),
      });
  } else {
    console.log("Record exist: " + Tasks.find().count());
  }
});
