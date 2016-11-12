var require = meteorInstall({"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/template.main.js                                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.body.addContent((function() {                                                                       // 2
  var view = this;                                                                                           // 3
  return HTML.Raw('<div id="render-target"></div>');                                                         // 4
}));                                                                                                         // 5
Meteor.startup(Template.body.renderToDocument);                                                              // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.jsx":["react","meteor/kadira:flow-router","react-mounter","../imports/ui/MainLayout.jsx","../imports/ui/App.jsx","../imports/ui/SignUpForm.jsx","../imports/ui/SignInForm.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/routes.jsx                                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var React;module.import('react',{"default":function(v){React=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var mount;module.import('react-mounter',{"mount":function(v){mount=v}});var MainLayout;module.import('../imports/ui/MainLayout.jsx',{"MainLayout":function(v){MainLayout=v}});var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});var SignUpForm;module.import('../imports/ui/SignUpForm.jsx',{"default":function(v){SignUpForm=v}});var SignInForm;module.import('../imports/ui/SignInForm.jsx',{"default":function(v){SignInForm=v}});
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             //
                                                                                                             // 5
                                                                                                             // 6
                                                                                                             // 7
                                                                                                             // 8
                                                                                                             //
FlowRouter.route('/', {                                                                                      // 10
  action: function () {                                                                                      // 12
    function action() {                                                                                      // 10
      mount(MainLayout);                                                                                     // 13
    }                                                                                                        // 14
                                                                                                             //
    return action;                                                                                           // 10
  }()                                                                                                        // 10
});                                                                                                          // 10
                                                                                                             //
FlowRouter.route('/signUp', {                                                                                // 18
  action: function () {                                                                                      // 20
    function action() {                                                                                      // 18
      mount(SignUpForm);                                                                                     // 21
    }                                                                                                        // 22
                                                                                                             //
    return action;                                                                                           // 18
  }()                                                                                                        // 18
});                                                                                                          // 18
                                                                                                             //
FlowRouter.route('/signIn', {                                                                                // 26
  action: function () {                                                                                      // 27
    function action() {                                                                                      // 26
      mount(SignInForm);                                                                                     // 28
    }                                                                                                        // 29
                                                                                                             //
    return action;                                                                                           // 26
  }()                                                                                                        // 26
});                                                                                                          // 26
                                                                                                             //
FlowRouter.route('/app', {                                                                                   // 32
  action: function () {                                                                                      // 34
    function action() {                                                                                      // 32
      mount(App);                                                                                            // 35
    }                                                                                                        // 36
                                                                                                             //
    return action;                                                                                           // 32
  }()                                                                                                        // 32
});                                                                                                          // 32
                                                                                                             //
Accounts.onLogin(function () {                                                                               // 40
  FlowRouter.go('/app');                                                                                     // 41
});                                                                                                          // 42
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main.jsx":["react","meteor/meteor","react-dom","../imports/ui/App.jsx","../imports/startup/accounts-config.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/main.jsx                                                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});module.import('../imports/startup/accounts-config.js');
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             //
                                                                                                             // 5
                                                                                                             // 6
                                                                                                             //
Meteor.startup(function () {                                                                                 // 8
                                                                                                             //
  //render(<App />, document.getElementById('render-target'));                                               // 10
                                                                                                             //
});                                                                                                          // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/api/tasks.js                                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             //
var Tasks = new Mongo.Collection('tasks');                                                                   // 5
                                                                                                             //
if (Meteor.isServer) {                                                                                       // 7
  Meteor.publish('tasks', function () {                                                                      // 8
    function publishTasks() {                                                                                // 8
      return Tasks.find();                                                                                   // 9
    }                                                                                                        // 10
                                                                                                             //
    return publishTasks;                                                                                     // 8
  }());                                                                                                      // 8
}                                                                                                            // 11
                                                                                                             //
// Start meteor methods - like controllers                                                                   // 14
Meteor.methods({                                                                                             // 15
  'tasks.insert': function () {                                                                              // 16
    function tasksInsert(text) {                                                                             // 15
      check(text, String);                                                                                   // 17
                                                                                                             //
      if (!this.userId) {                                                                                    // 19
        throw new Meteor.Error("not-authorized");                                                            // 20
      }                                                                                                      // 21
                                                                                                             //
      Tasks.insert({                                                                                         // 23
        text: text,                                                                                          // 24
        createdAt: new Date(),                                                                               // 25
        owner: this.userId,                                                                                  // 26
        username: Meteor.users.findOne(this.userId).username                                                 // 27
      });                                                                                                    // 23
    }                                                                                                        // 29
                                                                                                             //
    return tasksInsert;                                                                                      // 15
  }(),                                                                                                       // 15
  'tasks.remove': function () {                                                                              // 31
    function tasksRemove(taskId) {                                                                           // 15
      check(taskId, String);                                                                                 // 32
      Tasks.remove(taskId);                                                                                  // 33
    }                                                                                                        // 35
                                                                                                             //
    return tasksRemove;                                                                                      // 15
  }(),                                                                                                       // 15
  'tasks.setChecked': function () {                                                                          // 37
    function tasksSetChecked(taskId, setChecked) {                                                           // 15
      check(taskId, String);                                                                                 // 38
      check(setChecked, Boolean);                                                                            // 39
                                                                                                             //
      Tasks.update(taskId, { $set: { checked: setChecked } });                                               // 41
    }                                                                                                        // 42
                                                                                                             //
    return tasksSetChecked;                                                                                  // 15
  }(),                                                                                                       // 15
  'tasks.edit': function () {                                                                                // 44
    function tasksEdit(taskId, newText) {                                                                    // 15
      check(taskId, String);                                                                                 // 45
                                                                                                             //
      Tasks.update(taskId, { $set: { text: newText } });                                                     // 47
    }                                                                                                        // 48
                                                                                                             //
    return tasksEdit;                                                                                        // 15
  }()                                                                                                        // 15
});                                                                                                          // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/startup/accounts-config.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                     // 1
                                                                                                             //
Accounts.ui.config({                                                                                         // 3
  passwordSignupFields: 'USERNAME_ONLY'                                                                      // 4
});                                                                                                          // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AccountsUIWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/templating","meteor/blaze",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/AccountsUIWrapper.jsx                                                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var Blaze;module.import('meteor/blaze',{"Blaze":function(v){Blaze=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             // 4
                                                                                                             //
var AccountsUIWrapper = function (_Component) {                                                              //
  _inherits(AccountsUIWrapper, _Component);                                                                  //
                                                                                                             //
  function AccountsUIWrapper() {                                                                             //
    _classCallCheck(this, AccountsUIWrapper);                                                                //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  AccountsUIWrapper.prototype.getEmail = function () {                                                       //
    function getEmail() {                                                                                    //
      if (Meteor.user()) {                                                                                   // 9
        console.log("here");                                                                                 // 10
        return Meteor.user().emails[0].address;                                                              // 11
      } else {                                                                                               // 12
        return "Not Logged in";                                                                              // 14
      }                                                                                                      // 15
    }                                                                                                        // 16
                                                                                                             //
    return getEmail;                                                                                         //
  }();                                                                                                       //
                                                                                                             //
  AccountsUIWrapper.prototype.logout = function () {                                                         //
    function logout() {                                                                                      //
      Meteor.logout(function () {                                                                            // 19
        FlowRouter.go('/');                                                                                  // 20
      });                                                                                                    // 21
    }                                                                                                        // 22
                                                                                                             //
    return logout;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  AccountsUIWrapper.prototype.render = function () {                                                         //
    function render() {                                                                                      //
      // Just render a placeholder container that will be filled in                                          // 25
      return React.createElement(                                                                            // 26
        'div',                                                                                               // 26
        null,                                                                                                // 26
        React.createElement(                                                                                 // 27
          'span',                                                                                            // 27
          { ref: 'container' },                                                                              // 27
          this.getEmail()                                                                                    // 27
        ),                                                                                                   // 27
        React.createElement(                                                                                 // 28
          'button',                                                                                          // 28
          { className: 'logout-button', onClick: this.logout.bind(this) },                                   // 28
          'Logout'                                                                                           // 28
        )                                                                                                    // 28
      );                                                                                                     // 26
    }                                                                                                        // 30
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return AccountsUIWrapper;                                                                                  //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(AccountsUIWrapper));                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-dom","../api/tasks.js","./Task.jsx","./AccountsUIWrapper.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/App.jsx                                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Tasks;module.import('../api/tasks.js',{"Tasks":function(v){Tasks=v}});var Task;module.import('./Task.jsx',{"default":function(v){Task=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             // 4
                                                                                                             //
                                                                                                             // 6
                                                                                                             // 7
                                                                                                             //
// App component - represents the whole app                                                                  // 9
                                                                                                             //
var App = function (_Component) {                                                                            //
  _inherits(App, _Component);                                                                                //
                                                                                                             //
  function App(props) {                                                                                      // 12
    _classCallCheck(this, App);                                                                              // 12
                                                                                                             //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                              // 12
                                                                                                             //
    _this.state = {                                                                                          // 15
      hideCompleted: false                                                                                   // 16
    };                                                                                                       // 15
    return _this;                                                                                            // 12
  }                                                                                                          // 18
                                                                                                             //
  App.prototype.handleSubmit = function () {                                                                 //
    function handleSubmit(event) {                                                                           //
      event.preventDefault();                                                                                // 21
                                                                                                             //
      // Find the text field via the React ref                                                               // 23
      var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();                                     // 24
                                                                                                             //
      Meteor.call('tasks.insert', text);                                                                     // 26
                                                                                                             //
      // Clear form                                                                                          // 28
      ReactDOM.findDOMNode(this.refs.textInput).value = '';                                                  // 29
    }                                                                                                        // 30
                                                                                                             //
    return handleSubmit;                                                                                     //
  }();                                                                                                       //
                                                                                                             //
  App.prototype.toggleHideCompleted = function () {                                                          //
    function toggleHideCompleted() {                                                                         //
      this.setState({                                                                                        // 33
        hideCompleted: !this.state.hideCompleted                                                             // 34
      });                                                                                                    // 33
    }                                                                                                        // 36
                                                                                                             //
    return toggleHideCompleted;                                                                              //
  }();                                                                                                       //
                                                                                                             //
  App.prototype.renderTasks = function () {                                                                  //
    function renderTasks() {                                                                                 //
      var filteredTasks = this.props.tasks;                                                                  // 39
      if (this.state.hideCompleted) {                                                                        // 40
        filteredTasks = filteredTasks.filter(function (task) {                                               // 41
          return !task.checked;                                                                              // 41
        });                                                                                                  // 41
      }                                                                                                      // 42
      return filteredTasks.map(function (task) {                                                             // 43
        return React.createElement(Task, { key: task._id, task: task });                                     // 43
      });                                                                                                    // 43
    }                                                                                                        // 46
                                                                                                             //
    return renderTasks;                                                                                      //
  }();                                                                                                       //
                                                                                                             //
  App.prototype.render = function () {                                                                       //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 49
        'div',                                                                                               // 50
        { className: 'container' },                                                                          // 50
        React.createElement(                                                                                 // 51
          'header',                                                                                          // 51
          null,                                                                                              // 51
          React.createElement(                                                                               // 52
            'h1',                                                                                            // 52
            null,                                                                                            // 52
            'To Do List | You have ',                                                                        // 52
            this.props.incompleteTaskCount,                                                                  // 52
            ' to do'                                                                                         // 52
          ),                                                                                                 // 52
          React.createElement(                                                                               // 54
            'label',                                                                                         // 54
            { className: 'hide-completed' },                                                                 // 54
            React.createElement('input', {                                                                   // 55
              type: 'checkbox',                                                                              // 56
              readOnly: true,                                                                                // 57
              checked: this.state.hideCompleted,                                                             // 58
              onClick: this.toggleHideCompleted.bind(this) }),                                               // 59
            'Hide Completed Tasks'                                                                           // 54
          ),                                                                                                 // 54
          React.createElement(AccountsUIWrapper, null),                                                      // 63
          this.props.currentUser ? React.createElement(                                                      // 65
            'form',                                                                                          // 66
            { className: 'new-task', onSubmit: this.handleSubmit.bind(this) },                               // 66
            React.createElement('input', {                                                                   // 67
              type: 'text',                                                                                  // 68
              ref: 'textInput',                                                                              // 69
              placeholder: 'Type to add new tasks'                                                           // 70
            })                                                                                               // 67
          ) : ''                                                                                             // 66
        ),                                                                                                   // 51
        React.createElement(                                                                                 // 75
          'ul',                                                                                              // 75
          null,                                                                                              // 75
          this.renderTasks()                                                                                 // 76
        )                                                                                                    // 75
      );                                                                                                     // 50
    }                                                                                                        // 80
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return App;                                                                                                //
}(Component);                                                                                                //
                                                                                                             //
App.propTypes = {                                                                                            // 83
  tasks: PropTypes.array.isRequired,                                                                         // 84
  incompleteTaskCount: PropTypes.number.isRequired,                                                          // 85
  currentUser: PropTypes.object                                                                              // 86
};                                                                                                           // 83
                                                                                                             //
module.export("default",exports.default=(createContainer(function () {                                       // 89
  Meteor.subscribe('tasks');                                                                                 // 90
  return {                                                                                                   // 91
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),                                              // 92
    incompleteTaskCount: Tasks.find({ checked: { $ne: true } }).count(),                                     // 93
    currentUser: Meteor.user()                                                                               // 94
  };                                                                                                         // 91
}, App)));                                                                                                   // 96
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayout.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/kadira:flow-router","./SignInButton.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/MainLayout.jsx                                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({MainLayout:function(){return MainLayout}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var SignInButton;module.import('./SignInButton.jsx',{"default":function(v){SignInButton=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             //
var MainLayout = function (_Component) {                                                                     // 5
  _inherits(MainLayout, _Component);                                                                         // 5
                                                                                                             //
  function MainLayout(props) {                                                                               // 6
    _classCallCheck(this, MainLayout);                                                                       // 6
                                                                                                             //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                              // 6
                                                                                                             //
    console.log("constructor");                                                                              // 8
    document.title = "Home";                                                                                 // 9
    return _this;                                                                                            // 6
  }                                                                                                          // 10
                                                                                                             //
  MainLayout.prototype.goToApp = function () {                                                               // 5
    function goToApp() {                                                                                     // 5
      FlowRouter.go('/app');                                                                                 // 13
    }                                                                                                        // 14
                                                                                                             //
    return goToApp;                                                                                          // 5
  }();                                                                                                       // 5
                                                                                                             //
  MainLayout.prototype.render = function () {                                                                // 5
    function render() {                                                                                      // 5
      return React.createElement(                                                                            // 16
        'div',                                                                                               // 17
        { className: 'text-center' },                                                                        // 17
        React.createElement(                                                                                 // 18
          'h1',                                                                                              // 18
          null,                                                                                              // 18
          'This is the Home page'                                                                            // 18
        ),                                                                                                   // 18
        React.createElement('br', null),                                                                     // 20
        React.createElement(SignInButton, null)                                                              // 21
      );                                                                                                     // 17
    }                                                                                                        // 25
                                                                                                             //
    return render;                                                                                           // 5
  }();                                                                                                       // 5
                                                                                                             //
  return MainLayout;                                                                                         // 5
}(Component);;                                                                                               // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignInButton.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/kadira:flow-router",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/SignInButton.jsx                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             //
var SignInButton = function (_Component) {                                                                   //
  _inherits(SignInButton, _Component);                                                                       //
                                                                                                             //
  function SignInButton() {                                                                                  //
    _classCallCheck(this, SignInButton);                                                                     //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  SignInButton.prototype.handleClick = function () {                                                         //
    function handleClick(event) {                                                                            //
      event.preventDefault();                                                                                // 6
      FlowRouter.go('/signIn');                                                                              // 7
    }                                                                                                        // 8
                                                                                                             //
    return handleClick;                                                                                      //
  }();                                                                                                       //
                                                                                                             //
  SignInButton.prototype.render = function () {                                                              //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 10
        'button',                                                                                            // 11
        { className: 'btn primary-button bump-left', onClick: this.handleClick.bind(this) },                 // 11
        'Sign In Here'                                                                                       // 11
      );                                                                                                     // 11
    }                                                                                                        // 13
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return SignInButton;                                                                                       //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(SignInButton));                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignInForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","./SignUpButton.jsx","meteor/kadira:flow-router",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/SignInForm.jsx                                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var SignUpButton;module.import('./SignUpButton.jsx',{"default":function(v){SignUpButton=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             // 4
                                                                                                             //
var SignInForm = function (_Component) {                                                                     //
  _inherits(SignInForm, _Component);                                                                         //
                                                                                                             //
  function SignInForm() {                                                                                    //
    _classCallCheck(this, SignInForm);                                                                       //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  SignInForm.prototype.handleSubmit = function () {                                                          //
    function handleSubmit(event) {                                                                           //
      event.preventDefault();                                                                                // 8
      var email = ReactDOM.findDOMNode(this.refs.username).value.trim();                                     // 9
      var pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();                                       // 10
                                                                                                             //
      Meteor.loginWithPassword(email, pwd, function (err) {                                                  // 12
        if (err) {                                                                                           // 13
          console.log(err.reason);                                                                           // 14
          return false;                                                                                      // 15
        }                                                                                                    // 16
      });                                                                                                    // 17
    }                                                                                                        // 19
                                                                                                             //
    return handleSubmit;                                                                                     //
  }();                                                                                                       //
                                                                                                             //
  SignInForm.prototype.render = function () {                                                                //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 22
        'div',                                                                                               // 23
        { id: 'containerDiv', className: 'container' },                                                      // 23
        React.createElement(                                                                                 // 24
          'div',                                                                                             // 24
          { className: 'row' },                                                                              // 24
          React.createElement(                                                                               // 25
            'div',                                                                                           // 25
            { className: 'text-center' },                                                                    // 25
            React.createElement(                                                                             // 26
              'h3',                                                                                          // 26
              null,                                                                                          // 26
              'Need to create and Account?'                                                                  // 26
            )                                                                                                // 26
          ),                                                                                                 // 25
          React.createElement(                                                                               // 30
            'div',                                                                                           // 30
            { className: 'col-md-6 col-md-offset-3' },                                                       // 30
            React.createElement(                                                                             // 31
              'form',                                                                                        // 31
              { className: 'signInForm', onSubmit: this.handleSubmit.bind(this) },                           // 31
              React.createElement(                                                                           // 32
                'div',                                                                                       // 32
                { className: 'form-group ' },                                                                // 32
                React.createElement(                                                                         // 33
                  'label',                                                                                   // 33
                  { htmlFor: 'email' },                                                                      // 33
                  'Email:'                                                                                   // 33
                ),                                                                                           // 33
                React.createElement('input', {                                                               // 34
                  id: 'email',                                                                               // 35
                  className: 'input-sm col-md-offset-1',                                                     // 36
                  type: 'email',                                                                             // 37
                  ref: 'username',                                                                           // 38
                  placeholder: 'Email'                                                                       // 39
                })                                                                                           // 34
              ),                                                                                             // 32
              React.createElement(                                                                           // 42
                'div',                                                                                       // 42
                { className: 'form-group' },                                                                 // 42
                React.createElement(                                                                         // 43
                  'label',                                                                                   // 43
                  null,                                                                                      // 43
                  'Password:'                                                                                // 43
                ),                                                                                           // 43
                React.createElement('input', {                                                               // 44
                  className: 'input-sm',                                                                     // 45
                  type: 'password',                                                                          // 46
                  ref: 'password',                                                                           // 47
                  placeholder: 'Password'                                                                    // 48
                })                                                                                           // 44
              ),                                                                                             // 42
              React.createElement(                                                                           // 52
                'div',                                                                                       // 52
                { id: 'buttonContainer', className: 'container' },                                           // 52
                React.createElement(                                                                         // 53
                  'button',                                                                                  // 53
                  { type: 'submit', ref: 'regButton', className: 'btn primary-button' },                     // 53
                  'Login'                                                                                    // 53
                ),                                                                                           // 53
                React.createElement(SignUpButton, null),                                                     // 54
                React.createElement(                                                                         // 55
                  'a',                                                                                       // 55
                  { href: '/', className: 'btn cancel-button bump-left' },                                   // 55
                  'Cancel'                                                                                   // 55
                )                                                                                            // 55
              )                                                                                              // 52
            )                                                                                                // 31
          )                                                                                                  // 30
        )                                                                                                    // 24
      );                                                                                                     // 23
    }                                                                                                        // 64
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return SignInForm;                                                                                         //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(SignInForm));                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignUpButton.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/kadira:flow-router",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/SignUpButton.jsx                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             //
var SignUpButton = function (_Component) {                                                                   //
  _inherits(SignUpButton, _Component);                                                                       //
                                                                                                             //
  function SignUpButton() {                                                                                  //
    _classCallCheck(this, SignUpButton);                                                                     //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  SignUpButton.prototype.handleClick = function () {                                                         //
    function handleClick(event) {                                                                            //
      event.preventDefault();                                                                                // 5
      FlowRouter.go('/signUp');                                                                              // 6
    }                                                                                                        // 7
                                                                                                             //
    return handleClick;                                                                                      //
  }();                                                                                                       //
                                                                                                             //
  SignUpButton.prototype.render = function () {                                                              //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 9
        'button',                                                                                            // 10
        { id: 'signUp', className: 'btn secondary-button bump-left', onClick: this.handleClick.bind(this) },
        'Sign Up Here'                                                                                       // 10
      );                                                                                                     // 10
    }                                                                                                        // 12
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return SignUpButton;                                                                                       //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(SignUpButton));                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignUpForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/kadira:flow-router","meteor/meteor","meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/SignUpForm.jsx                                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             // 4
                                                                                                             // 5
                                                                                                             //
var SignUpForm = function (_Component) {                                                                     //
  _inherits(SignUpForm, _Component);                                                                         //
                                                                                                             //
  function SignUpForm() {                                                                                    //
    _classCallCheck(this, SignUpForm);                                                                       //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  SignUpForm.prototype.handleSubmit = function () {                                                          //
    function handleSubmit(event) {                                                                           //
      event.preventDefault();                                                                                // 10
      var email = ReactDOM.findDOMNode(this.refs.username).value.trim();                                     // 11
      var pwd = ReactDOM.findDOMNode(this.refs.password).value.trim();                                       // 12
      var userObject = {                                                                                     // 13
        email: email,                                                                                        // 14
        password: pwd                                                                                        // 15
      };                                                                                                     // 13
                                                                                                             //
      Accounts.createUser(userObject, function (err) {                                                       // 18
        if (err) {                                                                                           // 19
          console.log(err.reason);                                                                           // 20
        } else {                                                                                             // 21
          FlowRouter.go('/app');                                                                             // 23
        }                                                                                                    // 24
      });                                                                                                    // 25
                                                                                                             //
      // FlowRouter.go('/app');                                                                              // 27
    }                                                                                                        // 28
                                                                                                             //
    return handleSubmit;                                                                                     //
  }();                                                                                                       //
                                                                                                             //
  SignUpForm.prototype.render = function () {                                                                //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 30
        'div',                                                                                               // 31
        { className: 'text-center' },                                                                        // 31
        React.createElement(                                                                                 // 32
          'form',                                                                                            // 32
          { className: 'signUpForm', onSubmit: this.handleSubmit.bind(this) },                               // 32
          React.createElement('input', {                                                                     // 33
            type: 'email',                                                                                   // 34
            ref: 'username',                                                                                 // 35
            className: 'input-sm',                                                                           // 36
            placeholder: 'Email'                                                                             // 37
          }),                                                                                                // 33
          React.createElement('br', null),                                                                   // 38
          React.createElement('input', {                                                                     // 39
            type: 'password',                                                                                // 40
            ref: 'password',                                                                                 // 41
            className: 'input-sm',                                                                           // 42
            placeholder: 'Password'                                                                          // 43
          }),                                                                                                // 39
          React.createElement('br', null),                                                                   // 44
          React.createElement(                                                                               // 45
            'button',                                                                                        // 45
            {                                                                                                // 45
              type: 'submit',                                                                                // 46
              ref: 'regButton',                                                                              // 47
              className: 'btn primary-button'                                                                // 48
            },                                                                                               // 45
            'Register'                                                                                       // 45
          ),                                                                                                 // 45
          React.createElement(                                                                               // 52
            'a',                                                                                             // 52
            {                                                                                                // 52
              href: '/',                                                                                     // 53
              className: 'btn cancel-button'                                                                 // 54
            },                                                                                               // 52
            'Cancel'                                                                                         // 52
          )                                                                                                  // 52
        )                                                                                                    // 32
      );                                                                                                     // 31
    }                                                                                                        // 61
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return SignUpForm;                                                                                         //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(SignUpForm));                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Task.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","../api/tasks.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Task.jsx                                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Tasks;module.import('../api/tasks.js',{"Tasks":function(v){Tasks=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             // 2
// Task component - represents a single todo item                                                            // 3
                                                                                                             //
var Task = function (_Component) {                                                                           //
  _inherits(Task, _Component);                                                                               //
                                                                                                             //
  function Task(props) {                                                                                     // 5
    _classCallCheck(this, Task);                                                                             // 5
                                                                                                             //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                              // 5
                                                                                                             //
    _this.state = { editable: false, text: props.task.text };                                                // 7
    return _this;                                                                                            // 5
  }                                                                                                          // 8
                                                                                                             //
  Task.prototype.taskItem = function () {                                                                    //
    function taskItem() {                                                                                    //
      var taskClassName = this.props.task.checked ? "checked" : "";                                          // 11
      return React.createElement(                                                                            // 12
        'li',                                                                                                // 12
        { className: taskClassName },                                                                        // 12
        React.createElement(                                                                                 // 13
          'div',                                                                                             // 13
          { className: 'wrapper' },                                                                          // 13
          React.createElement(                                                                               // 14
            'button',                                                                                        // 14
            { className: 'edit', onClick: this.toggleEdit.bind(this) },                                      // 14
            '\u270E'                                                                                         // 14
          ),                                                                                                 // 14
          React.createElement(                                                                               // 15
            'button',                                                                                        // 15
            { className: 'delete', onClick: this.deleteTask.bind(this) },                                    // 15
            '\xD7'                                                                                           // 15
          )                                                                                                  // 15
        ),                                                                                                   // 13
        React.createElement('input', {                                                                       // 17
          type: 'checkbox',                                                                                  // 18
          readOnly: true,                                                                                    // 19
          checked: this.props.task.checked,                                                                  // 20
          onClick: this.toggleChecked.bind(this) }),                                                         // 21
        React.createElement(                                                                                 // 23
          'span',                                                                                            // 23
          { className: 'text' },                                                                             // 23
          Meteor.users.findOne(Meteor.userId()).emails[0].address                                            // 23
        ),                                                                                                   // 23
        ' : ',                                                                                               // 12
        this.props.task.text                                                                                 // 23
      );                                                                                                     // 12
    }                                                                                                        // 25
                                                                                                             //
    return taskItem;                                                                                         //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.makeTaskeditable = function () {                                                            //
    function makeTaskeditable() {                                                                            //
      var taskClassName = this.props.task.checked ? "checked" : "";                                          // 28
      return React.createElement(                                                                            // 29
        'li',                                                                                                // 29
        { className: taskClassName },                                                                        // 29
        React.createElement('input', { onChange: this.handleChange.bind(this), type: 'text', className: 'text', value: this.state.text }),
        React.createElement(                                                                                 // 32
          'button',                                                                                          // 32
          { role: 'submit', className: 'save', onClick: this.editTask.bind(this) },                          // 32
          'Submit'                                                                                           // 32
        ),                                                                                                   // 32
        React.createElement(                                                                                 // 34
          'button',                                                                                          // 34
          { role: 'button', className: 'cancel', onClick: this.toggleEdit.bind(this) },                      // 34
          'Cancel'                                                                                           // 34
        )                                                                                                    // 34
      );                                                                                                     // 29
    }                                                                                                        // 36
                                                                                                             //
    return makeTaskeditable;                                                                                 //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.handleChange = function () {                                                                //
    function handleChange(event) {                                                                           //
      this.setState({ text: event.target.value });                                                           // 39
    }                                                                                                        // 40
                                                                                                             //
    return handleChange;                                                                                     //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.toggleChecked = function () {                                                               //
    function toggleChecked() {                                                                               //
      Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);                        // 44
    }                                                                                                        // 46
                                                                                                             //
    return toggleChecked;                                                                                    //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.deleteTask = function () {                                                                  //
    function deleteTask() {                                                                                  //
      Meteor.call('tasks.remove', this.props.task._id);                                                      // 49
    }                                                                                                        // 51
                                                                                                             //
    return deleteTask;                                                                                       //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.toggleEdit = function () {                                                                  //
    function toggleEdit(event) {                                                                             //
      event.preventDefault();                                                                                // 54
      this.setState({ editable: !this.state.editable });                                                     // 55
    }                                                                                                        // 56
                                                                                                             //
    return toggleEdit;                                                                                       //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.editTask = function () {                                                                    //
    function editTask(event) {                                                                               //
      event.preventDefault();                                                                                // 59
      var text = $(".text").val().trim();                                                                    // 60
      Meteor.call('tasks.edit', this.props.task._id, text, function (err, res) {                             // 61
        if (err) {                                                                                           // 62
          console.log(err.reason);                                                                           // 63
        }                                                                                                    // 64
      });                                                                                                    // 65
                                                                                                             //
      this.toggleEdit(event);                                                                                // 67
    }                                                                                                        // 68
                                                                                                             //
    return editTask;                                                                                         //
  }();                                                                                                       //
                                                                                                             //
  Task.prototype.render = function () {                                                                      //
    function render() {                                                                                      //
      var component = void 0;                                                                                // 71
      if (this.state.editable) {                                                                             // 72
        component = this.makeTaskeditable();                                                                 // 73
      } else {                                                                                               // 74
        component = this.taskItem();                                                                         // 76
      }                                                                                                      // 77
      return component;                                                                                      // 78
    }                                                                                                        // 80
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return Task;                                                                                               //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(Task));                                                             //
                                                                                                             //
                                                                                                             //
Task.propTypes = {                                                                                           // 83
  // This component gets the task to display through a React prop.                                           // 84
  // We can use propTypes to indicate it is required                                                         // 85
  task: PropTypes.object.isRequired                                                                          // 86
};                                                                                                           // 83
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/compatibility/bootstrap.min.js                                                                     //
// This file is in bare mode and is not in its own closure.                                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
/*!                                                                                                          // 1
 * Bootstrap v3.3.7 (http://getbootstrap.com)                                                                // 2
 * Copyright 2011-2016 Twitter, Inc.                                                                         // 3
 * Licensed under the MIT license                                                                            // 4
 */                                                                                                          // 5
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


require("./client/routes.jsx");
require("./client/main.jsx");