/**
 * Config file with project specifics datas
 * usersUrl:  redmine request to get project members
 * issuesUrl: redmine request to get current sprint trackers to be displayed
 * Note: 1/ your Redmine server shall implement CORS directives (see plugin Redmine CORS http://github.com/mavimo/redmine_cors)
 *       2/ you shall specify your API key directly in the url (&key=......................)
 *       3/ issues request is currently limited to 100 lines
 */

this.Config = {
	usersUrl: "http://your.redmine.server.com/users.json?group_id=1&key=abcded01234567890",
    issuesUrl: "http://your.redmine.server.com/projects/your_project/issues.json?query_id=1&offset=0&limit=100&key=abcded01234567890"
};
