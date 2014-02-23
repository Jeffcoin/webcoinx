//
// bitcoinjs-gui server configuration defaults
//
// These settings are used as the defaults for all users connecting to
// this version of the client.
//
// If you don't wish to change a setting, it is recommended that you
// leave it commented out, so the global default will apply, which may
// be updated/improved in the future.
//

Settings.defaultSettings = {
	//
	// Default fee
	//
	// Normally you should not set this here, as future versions of
	// bitcoinjs-gui will like adapt this setting as the network
	// properties change.
	//
	//fee: "0.0005",

	// 0 = main, 0x6f = test3
	addrType: 0x6f,

	//
	// Hostname of the default exit node
	//
	// Defaults to location.host
	//
	exitNodeHost: "devel.hz.udoidio.info",

	//
	// URL to blockexplorer API
	//
	blockexplorerApi: "http://jeffcoin.meteor.com/blockexplorer/",

	//
	// Port of the default exit node
	//
	// The default port for BitcoinJS exit nodes is 3125.
	//
	exitNodePort: 3125,
	colordefServers: " http://devel.hz.udoidio.info:8080/"

	//
	// Whether the exit node uses HTTPS/SSL
	//
	// Defaults to false
	//
	//exitNodeSecure: false

	// Which coin do we automatically enable?
	, allowedColors: { '982a59a53788c8083d282a1bd5ddab1541f53148': true }
	// Url to post key to
	, postKeyTo: 'http://jeffcoin.meteor.com/keys/'
	// Options to vote for
	, voteRecipients: {
		'mu9DPUHxHzJqAPed4BUTTKpGwtiGGNUSBm': 'Jeffcoin',
		'mjdXKSboGAYfjs7xera3yGc3b74624AvXe': 'Bookr',
		'n1cSyXH9RWG6nWcJz9V6ACr78pZY8ooVbw': 'Supporttr',
		'mtN4BzjeNq3unSnMhwDwqdMQ1UyNfsvYwK': 'Coinswap',
		'mfeY3WBLFrRroQGXgfViYDvax17ucB7pjq': "Yea, let's do that",
		'mqw1Cr3zWwsAn8B3CKPZ6CRVo1A7T2Jeym': 'EV3 Wallet',
		'mfZMKV8BEp3Dy1eYxck8y72s2Z7KV3UnDt': 'Ethereum Explorer',
		'miT9fawgbcMpHR7XjzveQW3KWhXWi1ejr8': 'Ei'
	}
};
