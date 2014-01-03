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
      milestone:           "CURRENT RELEASE",
      percent:             "100",
      usLeft:              "0",
      usTotal:             "0",
      defectsLeft:         "0",
      defectsTotal:        "0",
      totalDefectsOpen:    "0",
      totalDefectsClosed:  "0"
    },

    url: "http://localhost:8888/res/redmine.json",

    initialize: function(){
      LOG('::initialize::');
      this.myFetch();
      this.on('change', function(){
        LOG('- Values for model RedmineModel have changed.');
      });
      var self = this;
      setInterval(function() {
          self.myFetch();
      }, 10000);
    },

    myFetch: function() {
     LOG('::myFetch::');
     this.fetch();
    }
  });

   models.RedmineModel = RedmineModel;

 })(this, this.Models);
