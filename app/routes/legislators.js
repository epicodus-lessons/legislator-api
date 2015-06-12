import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return $.get("http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=97227");
    // return Ember.$.get('congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=97227').then(function(data) {
    //     return data.splice(0, 3);
    // });
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=97227';
    var legislators=[];
    Ember.$.getJSON(url).done(function(responseJSON) {
      responseJSON.results.forEach(function(legislator){
        legislators.push(legislator);
      });
    });
    return legislators;
  }
});
