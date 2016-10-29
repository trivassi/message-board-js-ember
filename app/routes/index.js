import Ember from 'ember';

var questions = [{
  content: "Who came first the chicken or the egg?",
  author: "Veruca Salt",
  notes: "Important"
}, {
  content: "Why did the chicken cross the road?",
  owner: "Mike TV",
  notes: "Joke"
}, {
  content: "How many numbres does Pi have?",
  owner: "Violet Beauregarde",
  notes: "Math"
}];

export default Ember.Route.extend({

  model() {
    return questions;
  },
});
