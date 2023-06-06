export const ConfigFields = [
    {
        type: 'text',
        id: 'info',
        width: 12,
        label: 'Information',
        value:
            "This module controls Panasonic ATSS.",
    },
    {
        type: 'textinput',
        id: 'host',
        label: 'Server IP',
        width: 4,
        // regex: self.REGEX_IP
    },
    {
        type: 'textinput',
        id: 'httpPort',
        label: 'HTTP Port (Default: 80)',
        width: 3,
        default: 1337,
        regex: self.REGEX_PORT,
    },
    {
        type: 'text',
        id: 'dummy1',
        width: 12,
        label: ' ',
        value: ' ',
    },
    {
        type: 'textinput',
        id: 'username',
        label: 'Server Username',
        width: 8
    },
    {
        type: 'textinput',
        id: 'password',
        label: 'Server Password',
        width: 8
    },
    {
        type: 'textinput',
        id: 'cameraid',
        label: 'Camera ID',
        width: 8
    },
    {
		type: 'checkbox',
		id: 'debug',
		width: 1,
		label: 'Enable',
		default: false,
	},
    {
		type: 'static-text',
		id: 'debugInfo',
		width: 11,
		label: 'Enable Debug To Log Window',
		value:
			'Requires Companion to be restarted. But this will allow you the see what is being sent from the module and what is being received from the server.',
	},
]