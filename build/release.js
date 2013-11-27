module.exports = function( Release ) {

	Release.define({
		issueTracker: "github",
		changelogShell: function() {
			return "# Changelog for jQuery Mobile v" + Release.newVersion + "\n";
		}
	});

};