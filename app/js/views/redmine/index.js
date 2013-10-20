
(function(global, views) {
	'use strict';

	var
    /*
     * Logger for my views
     */
     LOG = LOGGER('redmine');

  var RedmineView = Backbone.View.extend({

    el: '#redmine-status',

    initialize: function() {
      this.render();
    },

    render: function() {
      LOG('::render::');
      var obj = global.app.data.redmineModel.attributes;
      this.el.innerHTML = renderTemplate('redmine/index', obj);
      return this;
    }
  });

  views.RedmineView = RedmineView;

})(this, this.Views);