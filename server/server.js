
var Places = new Meteor.Collection( 'places' ); 
Meteor.startup(function(){
   if(!Places.find().count()){
     var states = [ 'Andhra' , 'Telangana' , 'Tamilnadu' , 'Gujarath' , 'Maharashra' , 'West-Bengal'  ],
         countries = [ 'India' , 'Pakisthan' , 'Srilanka' , 'Bangladesh' , 'Afganisthan' , 'UAE'   ];

     for(var i=0 ; i<states.length ; i++)
     Places.insert({ name : states[i] , type : 'state' });

     for(var i=0 ; i<countries.length ; i++)
     Places.insert({ name : countries[i] , type : 'country'});
   }
})

Meteor.publish("allPlaces", function (type) {
    check(type, Match.Any);
    console.log('type:' + type+ '  place count:' + Places.find({ type : type }).count())  
    return Places.find({ type : type });
});

