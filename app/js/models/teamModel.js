(function(global, models) {
  'use strict';

  var
    /*
     * Logger for my model
     */
     LOG = LOGGER('TeamModel');

   var TeamModel = Backbone.Model.extend({
    defaults: {
      title: "Webapp Team Issues",
      team: [
        {
          name:               "dev1",
          totalIssues:        "0",
          totalIssuesOpen:    "0",
          totalIssuesClosed:  "0"
        }
      ]
    },

    url: "http://localhost:8888/res/team.json",

    initialize: function(){
      LOG('::initialize::');
      this.myFetch();
      this.on('change', function(){
        LOG('- Values for model TeamModel have changed.');
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

   models.TeamModel = TeamModel;

 })(this, this.Models);
