var require = meteorInstall({"imports":{"api":{"auth.js":["meteor/meteor","meteor/accounts-base","meteor/check","meteor/kadira:flow-router",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/api/auth.js                                                                   //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});
                                                                                         // 2
                                                                                         // 3
                                                                                         // 4
                                                                                         //
Meteor.methods({                                                                         // 6
  'signUp': function () {                                                                // 7
    function signUp(email, pwd) {                                                        // 6
      console.log("signing up");                                                         // 8
      Accounts.createUser({                                                              // 9
        email: email,                                                                    // 10
        password: pwd                                                                    // 11
      });                                                                                // 9
    }                                                                                    // 14
                                                                                         //
    return signUp;                                                                       // 6
  }()                                                                                    // 6
});                                                                                      // 6
///////////////////////////////////////////////////////////////////////////////////////////

}],"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/api/tasks.js                                                                  //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                         // 2
                                                                                         // 3
                                                                                         //
var Tasks = new Mongo.Collection('tasks');                                               // 5
                                                                                         //
if (Meteor.isServer) {                                                                   // 7
  Meteor.publish('tasks', function () {                                                  // 8
    function publishTasks() {                                                            // 8
      return Tasks.find();                                                               // 9
    }                                                                                    // 10
                                                                                         //
    return publishTasks;                                                                 // 8
  }());                                                                                  // 8
}                                                                                        // 11
                                                                                         //
// Start meteor methods - like controllers                                               // 14
Meteor.methods({                                                                         // 15
  'tasks.insert': function () {                                                          // 16
    function tasksInsert(text) {                                                         // 15
      check(text, String);                                                               // 17
                                                                                         //
      if (!this.userId) {                                                                // 19
        throw new Meteor.Error("not-authorized");                                        // 20
      }                                                                                  // 21
                                                                                         //
      Tasks.insert({                                                                     // 23
        text: text,                                                                      // 24
        createdAt: new Date(),                                                           // 25
        owner: this.userId,                                                              // 26
        username: Meteor.users.findOne(this.userId).username                             // 27
      });                                                                                // 23
    }                                                                                    // 29
                                                                                         //
    return tasksInsert;                                                                  // 15
  }(),                                                                                   // 15
  'tasks.remove': function () {                                                          // 31
    function tasksRemove(taskId) {                                                       // 15
      check(taskId, String);                                                             // 32
      Tasks.remove(taskId);                                                              // 33
    }                                                                                    // 35
                                                                                         //
    return tasksRemove;                                                                  // 15
  }(),                                                                                   // 15
  'tasks.setChecked': function () {                                                      // 37
    function tasksSetChecked(taskId, setChecked) {                                       // 15
      check(taskId, String);                                                             // 38
      check(setChecked, Boolean);                                                        // 39
                                                                                         //
      Tasks.update(taskId, { $set: { checked: setChecked } });                           // 41
    }                                                                                    // 42
                                                                                         //
    return tasksSetChecked;                                                              // 15
  }(),                                                                                   // 15
  'tasks.edit': function () {                                                            // 44
    function tasksEdit(taskId, newText) {                                                // 15
      check(taskId, String);                                                             // 45
                                                                                         //
      Tasks.update(taskId, { $set: { text: newText } });                                 // 47
    }                                                                                    // 48
                                                                                         //
    return tasksEdit;                                                                    // 15
  }()                                                                                    // 15
});                                                                                      // 15
///////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"validate.js":["meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/startup/validate.js                                                           //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});
                                                                                         //
Accounts.validateLoginAttempt(function () {                                              // 3
  function validate(option) {                                                            // 3
    console.log("Validating..." + option.allowed);                                       // 4
    return option.allowed;                                                               // 5
  }                                                                                      // 6
                                                                                         //
  return validate;                                                                       // 3
}());                                                                                    // 3
///////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/tasks.js","../imports/api/auth.js","../imports/startup/validate.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// server/main.js                                                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/tasks.js');module.import('../imports/api/auth.js');module.import('../imports/startup/validate.js');
                                                                                         // 2
                                                                                         // 3
                                                                                         // 4
                                                                                         //
Meteor.startup(function () {                                                             // 6
  // code to run on server at startup                                                    // 7
});                                                                                      // 8
///////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
