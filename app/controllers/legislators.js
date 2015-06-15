import Ember from 'ember';

export default Ember.Controller.extend({
  viewLegislators: false,
  actions: {
    submit: function() {
      this.transitionToRoute('contactLegislators', this.get('zip'));
    }
  }
});
