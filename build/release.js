module.exports = function( Release ) {

	Release.define({
		changelogShell: function() {
			return "# Changelog for jQuery Mobile v" + Release.newVersion + "\n";
		}
	});

};