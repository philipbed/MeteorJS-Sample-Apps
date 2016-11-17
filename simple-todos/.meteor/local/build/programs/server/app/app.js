var require = meteorInstall({"imports":{"api":{"auth.js":["meteor/meteor","meteor/accounts-base","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/auth.js                                                                           //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
// Add methods to be called from Meteor.                                                         // 6
                                                                                                 //
Meteor.methods({                                                                                 // 8
                                                                                                 //
  /**                                                                                            // 10
   *  Adds a user account with their email and password in the db.                               //
   *  @param email - The user's email address                                                    //
   *  @param pwd - The user's desired password                                                   //
   */                                                                                            //
  'signUp': function () {                                                                        // 15
    function signUp(email, pwd) {                                                                // 8
      console.log("signing up");                                                                 // 16
      Accounts.createUser({                                                                      // 17
        email: email,                                                                            // 18
        password: pwd                                                                            // 19
      });                                                                                        // 17
    }                                                                                            // 22
                                                                                                 //
    return signUp;                                                                               // 8
  }()                                                                                            // 8
});                                                                                              // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"schema.js":["meteor/random","./tasks",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/schema.js                                                                         //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({typeDefs:function(){return typeDefs},resolvers:function(){return resolvers}});var Random;module.import('meteor/random',{"Random":function(v){Random=v}});var Tasks;module.import('./tasks',{"Tasks":function(v){Tasks=v}});/**
 * Created by Phil on 11/16/2016.                                                                //
 */                                                                                              //
                                                                                                 // 4
                                                                                                 // 5
                                                                                                 //
var typeDefs = ['\ntype Email {\n  address: String\n  verified: Boolean\n}\n\n\n\ntype User {\n  emails: [Email]\n  username: String\n  randomString: String\n  tasks: [Task]\n  _id: String\n}\n\ntype Task {\n    text: String\n    createdAt: String\n    owner: String\n    username: String\n}\ntype Query {\n  user(id: String!): User\n}\nschema {\n  query: Query\n}\n'];
                                                                                                 //
var resolvers = {                                                                                // 37
    Query: {                                                                                     // 38
        user: function () {                                                                      // 39
            function user(root, args, context) {                                                 // 38
                // Only return the current user, for security                                    // 40
                if (context.userId === args.id) {                                                // 41
                    return context.user;                                                         // 42
                }                                                                                // 43
            }                                                                                    // 44
                                                                                                 //
            return user;                                                                         // 38
        }()                                                                                      // 38
    },                                                                                           // 38
    User: {                                                                                      // 46
        emails: function () {                                                                    // 47
            function emails(_ref) {                                                              // 47
                var _emails = _ref.emails;                                                       // 47
                return _emails;                                                                  // 47
            }                                                                                    // 47
                                                                                                 //
            return emails;                                                                       // 47
        }(),                                                                                     // 47
        randomString: function () {                                                              // 48
            function randomString() {                                                            // 48
                return Random.id();                                                              // 48
            }                                                                                    // 48
                                                                                                 //
            return randomString;                                                                 // 48
        }(),                                                                                     // 48
        tasks: function () {                                                                     // 49
            function tasks(user) {                                                               // 46
                return Tasks.find({ owner: { $eq: user._id } }).fetch();                         // 50
            }                                                                                    // 51
                                                                                                 //
            return tasks;                                                                        // 46
        }()                                                                                      // 46
    }                                                                                            // 46
                                                                                                 //
};                                                                                               // 37
                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/tasks.js                                                                          //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var Tasks = new Mongo.Collection('tasks');                                                       // 5
                                                                                                 //
// This code block only gets run if this file is imported/ran on the server.                     // 7
if (Meteor.isServer) {                                                                           // 8
  Meteor.publish('tasks', function () {                                                          // 9
    function publishTasks() {                                                                    // 9
      return Tasks.find();                                                                       // 10
    }                                                                                            // 11
                                                                                                 //
    return publishTasks;                                                                         // 9
  }());                                                                                          // 9
}                                                                                                // 12
                                                                                                 //
// Start meteor methods - like controllers                                                       // 15
Meteor.methods({                                                                                 // 16
  /**                                                                                            // 17
   * Insert a task document into the Task collection                                             //
   * @param text - The text of the new task                                                      //
   */                                                                                            //
  'tasks.insert': function () {                                                                  // 21
    function tasksInsert(text) {                                                                 // 16
                                                                                                 //
      // Throw an error if the user is not logged in                                             // 23
      if (!this.userId) {                                                                        // 24
        throw new Meteor.Error("not-authorized");                                                // 25
      }                                                                                          // 26
      // Validate that text is a string                                                          // 27
      check(text, String);                                                                       // 28
      // Insert a new task                                                                       // 29
      Tasks.insert({                                                                             // 30
        text: text,                                                                              // 31
        createdAt: new Date(),                                                                   // 32
        owner: this.userId,                                                                      // 33
        username: Meteor.users.findOne(this.userId).username                                     // 34
      });                                                                                        // 30
    }                                                                                            // 36
                                                                                                 //
    return tasksInsert;                                                                          // 16
  }(),                                                                                           // 16
                                                                                                 //
                                                                                                 //
  /**                                                                                            // 38
   * Remove a task document from the Tasks collection                                            //
   * @param taskId - the ID of the Task to remove                                                //
   */                                                                                            //
  'tasks.remove': function () {                                                                  // 42
    function tasksRemove(taskId) {                                                               // 16
      check(taskId, String);                                                                     // 43
      Tasks.remove(taskId);                                                                      // 44
    }                                                                                            // 46
                                                                                                 //
    return tasksRemove;                                                                          // 16
  }(),                                                                                           // 16
                                                                                                 //
                                                                                                 //
  /**                                                                                            // 48
   * Set the checked attribute of a task                                                         //
   * @param taskId - the ID of the Task                                                          //
   * @param setChecked - a boolean that represents completion                                    //
   */                                                                                            //
  'tasks.setChecked': function () {                                                              // 53
    function tasksSetChecked(taskId, setChecked) {                                               // 16
      check(taskId, String);                                                                     // 54
      check(setChecked, Boolean);                                                                // 55
                                                                                                 //
      // use the $set keyword(MongoDB keyword) because it allows the document                    // 57
      // to be updated with that new field and not have the entire document                      // 58
      // replaced with a document with a new field.                                              // 59
      Tasks.update(taskId, { $set: { checked: setChecked } });                                   // 60
    }                                                                                            // 61
                                                                                                 //
    return tasksSetChecked;                                                                      // 16
  }(),                                                                                           // 16
                                                                                                 //
                                                                                                 //
  /**                                                                                            // 63
   * Edit the text of an existing task                                                           //
   * @param taskId - The ID of the task                                                          //
   * @param newText - The updated text                                                           //
   */                                                                                            //
  'tasks.edit': function () {                                                                    // 68
    function tasksEdit(taskId, newText) {                                                        // 16
      check(taskId, String);                                                                     // 69
                                                                                                 //
      Tasks.update(taskId, { $set: { text: newText } });                                         // 71
    }                                                                                            // 72
                                                                                                 //
    return tasksEdit;                                                                            // 16
  }()                                                                                            // 16
});                                                                                              // 16
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"validate.js":["meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/startup/validate.js                                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});         // 1
                                                                                                 //
// Not really any meaningful use in this app. Was testing out custom login and login validation.
Accounts.validateLoginAttempt(function () {                                                      // 4
  function validate(option) {                                                                    // 4
    console.log("Validating..." + option.allowed);                                               // 5
    return option.allowed;                                                                       // 6
  }                                                                                              // 7
                                                                                                 //
  return validate;                                                                               // 4
}());                                                                                            // 4
///////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/tasks.js","../imports/api/auth.js","../imports/startup/validate.js","meteor/apollo","graphql-tools","../imports/api/schema",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// server/main.js                                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/tasks.js');module.import('../imports/api/auth.js');module.import('../imports/startup/validate.js');var createApolloServer;module.import('meteor/apollo',{"createApolloServer":function(v){createApolloServer=v}});var makeExecutableSchema,addMockFunctionsToSchema;module.import('graphql-tools',{"makeExecutableSchema":function(v){makeExecutableSchema=v},"addMockFunctionsToSchema":function(v){addMockFunctionsToSchema=v}});var typeDefs,resolvers;module.import('../imports/api/schema',{"typeDefs":function(v){typeDefs=v},"resolvers":function(v){resolvers=v}});
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 // 4
                                                                                                 // 5
                                                                                                 // 6
                                                                                                 //
                                                                                                 // 8
                                                                                                 //
var schema = makeExecutableSchema({                                                              // 10
    typeDefs: typeDefs,                                                                          // 11
    resolvers: resolvers                                                                         // 12
});                                                                                              // 10
                                                                                                 //
createApolloServer({                                                                             // 15
    schema: schema                                                                               // 16
});                                                                                              // 15
                                                                                                 //
Meteor.startup(function () {                                                                     // 19
    // code to run on server at startup                                                          // 20
});                                                                                              // 21
///////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
