export const ConfigFields = [
    {
        type: 'static-text',
        id: 'info',
        width: 12,
        label: 'Information',
        value:
            "This module controls Panasonic Autotracking Servers.",
    },
    {
        type: 'textinput',
        id: 'host',
        label: 'Server IP',
        width: 4,
    },
    {
        type: 'textinput',
        id: 'httpPort',
        label: 'HTTP Port (Default: 80)',
        width: 5,
        default: 1337,
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