if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
    extended: false,
    limit : '500mb'
  }));

  Meteor.startup(function () {
    // code to run on server at startup


});
};



Router.route("/parse", function () {
  console.log("test", this.request.html);
  //var userString = decodeHTML(this.request.body);
  //console.log(userString);
  var emails = JSON.parse(this.request.body.mandrill_events);
  console.log(emails[0].msg.html);
  console.log(emails[0].msg.subject);
  this.response.end('hgjygujghghji\n');
}, {where : "server"});
