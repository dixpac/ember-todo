import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { text: "Buy milk" },
      { text: "Buy cow" },
      { text: "Buy farm" }
    ]
  }
});
