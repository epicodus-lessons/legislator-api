import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators');
  this.resource('contactLegislators', {path: 'contactLegislators/:zip'});
});

export default Router;
