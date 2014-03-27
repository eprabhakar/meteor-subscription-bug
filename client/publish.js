  var Places = new Meteor.Collection( 'places' ); 
  Session.setDefault('type','state');
  Deps.autorun(function(){
    Meteor.subscribe('allPlaces',Session.get('type'),function(){
      console.log("after subscription:" + Session.get('type') + ' Places count:' + Places.find({ }).count());
    });
  });

  Template.hello.greeting = function () {
    return "Testing.";
  };

  Template.hello.events({
    'click #states': function () {
      Session.set('type','state'); 
  },
  
  'click #countries': function () {
      Session.set('type','country');    
    }
  });


Template.placeslist.places = function(){
  console.log("Template helper places count:"+Places.find().count())
  return Places.find().fetch();
}

