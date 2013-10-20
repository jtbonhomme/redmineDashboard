
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
      var obj = {
        title:               "R7 TNT",
        milestone:           "PREDPLOIEMENT 10k",
        percent:             "68.342345",
        usLeft:              "2",
        usTotal:             "4",
        defectsLeft:         "6",
        defectsTotal:        "14",
        totalDefectsOpen:    "124",
        totalDefectsClosed:  "645"
      };
      this.el.innerHTML = renderTemplate('redmine/index', obj);
      return this;
    }
  });

  views.RedmineView = RedmineView;

})(this, this.Views);