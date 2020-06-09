const {API_KEY, API_SECRET, USER_ID, MEETING_ID, NODE_ENV} = process.env;

const env = NODE_ENV || 'production'

const config = {
	development :{
		APIKey : API_KEY,
		APISecret : API_SECRET,
		userId: USER_ID,
		MeetingId: MEETING_ID
	},
	production:{	
		APIKey : API_KEY,
		APISecret : API_SECRET,
		userId: USER_ID,
		MeetingId: MEETING_ID
	}
};

module.exports = config[env]
