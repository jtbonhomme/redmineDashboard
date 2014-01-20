
(function(global, views) {
	'use strict';

	var
    /*
     * Logger for my views
     */
     LOG = LOGGER('RedmineView');

  var RedmineView = Backbone.View.extend({

    el: '#redmine-status',

    initialize: function() {
      LOG('::initialize::');
      this.render();
      global.app.data.redmineModel.bind('change', _.bind(this.render, this));
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