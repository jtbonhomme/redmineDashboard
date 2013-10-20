
(function(global, models) {
  'use strict';

  var
    /*
     * Logger for my model
     */
     LOG = LOGGER('RedmineModel');

   var RedmineModel = Backbone.Model.extend({
    defaults: {
      title:               "R7 TNT",
      milestone:           "PREDPLOIEMENT 10k",
      percent:             "68.342345",
      usLeft:              "2",
      usTotal:             "4",
      defectsLeft:         "6",
      defectsTotal:        "14",
      totalDefectsOpen:    "124",
      totalDefectsClosed:  "645"
    },

    initialize: function(){
      LOG('::initialize::');
    }
  });

   models.RedmineModel = RedmineModel;

 })(this, this.Models);
