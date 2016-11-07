import Ember from 'ember';

export default Ember.Component.extend({
  faveAnswer: Ember.inject.service(),

  actions: {
    addToFave(answer){
      this.get('faveAnswer').add(answer);
    },
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
