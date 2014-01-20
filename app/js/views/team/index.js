
(function(global, views) {
	'use strict';

	var
    /*
     * Logger for my views
     */
     LOG = LOGGER('TeamView');

  var TeamView = Backbone.View.extend({

    el: '#team-status',

    initialize: function() {
      LOG('::initialize::');
      this.render();
      global.app.data.teamModel.bind('change', _.bind(this.render, this));
    },

    render: function() {
      LOG('::render::');
      var obj = global.app.data.teamModel.attributes;
      this.el.innerHTML = renderTemplate('team/index', obj);
      return this;
    }
  });

  views.TeamView = TeamView;

})(this, this.Views);