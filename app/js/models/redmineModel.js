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
      percent:             100,
      usLeft:              0,
      usTotal:             0,
      defectsLeft:         0,
      defectsTotal:        0,
      totalDefectsOpen:    0,
      totalDefectsClosed:  0
    },

    initialize: function(){
      LOG('::initialize::');

      this.on('change', function(){
        LOG('- Values for model RedmineModel have changed.');
      });

    },

    update: function() {
      LOG('::update::');
      var issues = global.app.data.issuesModel.attributes.issues;
      var reporting = {
        title:               "R7 TNT",
        milestone:           "CURRENT RELEASE",
        percent:             100,
        usLeft:              0,
        usTotal:             0,
        defectsLeft:         0,
        defectsTotal:        0,
        totalDefectsOpen:    0,
        totalDefectsClosed:  0
      };

      for (var j = issues.length - 1; j >= 0; j--) {
        var status = issues[j].status.id;
        if( status === 1  ||
            status === 2  ||
            status === 14 ||
            status === 12 ||
            status === 3  ||
            status === 11 ||
            status === 13 ||
            status === 10 ||
            status === 15 ) {
          if( issues[j].tracker.id === 15 ) {
            reporting.usLeft += 1;
          }
          else if ( issues[j].tracker.id === 1 ) {
            reporting.defectsLeft += 1;
          }
        }
        else {
        }
        if( issues[j].tracker.id === 15 ) {
          reporting.usTotal += 1;
        }
        else if ( issues[j].tracker.id === 1 ) {
          reporting.defectsTotal += 1;
        }
      }

      this.data.redmineModel.set(reporting);
    }
  });

  models.RedmineModel = RedmineModel;

 })(this, this.Models);
