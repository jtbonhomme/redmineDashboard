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
          //id:                 0,
          totalIssues:        0,
          totalIssuesOpen:    0,
          totalIssuesClosed:  0
        }
      ]
    },

    initialize: function(){
      LOG('::initialize::');

      this.on('change', function(){
        LOG('- Values for model TeamModel have changed.');
      });
    },

    update: function() {
      LOG('::update::');
      var users  = global.app.data.usersModel.attributes.group.users;
      var issues = global.app.data.issuesModel.attributes.issues;
      var team = [];
      var id;

      if( team ) {
        for (var i = users.length - 1; i >= 0; i--) {
          id = users[i].id;
          team[id] = {};
          team[id].name              = users[i].name;
          //team[i].id                = users[i].id;
          team[id].totalIssues       = 0;
          team[id].totalIssuesOpen   = 0;
          team[id].totalIssuesClosed = 0;
        }
      }

      if( issues ) {
        for (var j = issues.length - 1; j >= 0; j--) {
          id = issues[j].assigned_to.id;
          if( team[id] ) {
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
              team[id].totalIssuesOpen += 1;
            }
            else {
              team[id].totalIssuesClosed += 1;
            }
            team[id].totalIssues += 1;
          }
        }
      }
      var newTeam = [];

      team.forEach(function(obj) {
        if( obj ) {
          newTeam.push( obj );
        }
      });

      this.data.teamModel.set({
        "title": "Webapp Team Issues",
        "team": newTeam
      });

      LOG("done");
    }
  });

  models.TeamModel = TeamModel;

 })(this, this.Models);
