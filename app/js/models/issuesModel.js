(function(global, models) {
  'use strict';

  var
    /*
     * Logger for my model
     */
     LOG = LOGGER('IssuesModel');

   var IssuesModel = Backbone.Model.extend({

    url: "http://localhost:8888/res/issues.json",

    initialize: function(){
      LOG('::initialize::');
      //this.myFetch();
      this.on('change', function(){
        LOG('- Values for model IssuesModel have changed.');
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

   models.IssuesModel = IssuesModel;

 })(this, this.Models);
