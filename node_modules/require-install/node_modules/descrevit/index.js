module.exports = {
	_deasync: require('deasync'),
	_done: false,
	do: function(callback, sleep) {
		this._done = false;
		callback();
		while ( ! this._done) {
			this._deasync.sleep(sleep ? sleep : 100);
		}
	},
	done: function() {
		this._done = true;
	}
}