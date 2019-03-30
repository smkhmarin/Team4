/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var userSearchSchema = new Schema({

id: {
    type: Number, 
    required: true
}, 
id_str:  String,
name: String,
screen_name: String,
location: String,
description: String,
url: String, 
entities:{
    url:{
        urls:[{
            url: String,
            expanded_url: String,
            display_url: String,
            indicies: [Number], 
        }]
    },
    description:{
        urls:[]
    }
},
protected: Boolean,
followers_count: Number,
friends_count: Number,
listed_count: Number,
created_at: Date,
favourites_count: Number,
utc_offset: String,
time_zone: String,
geo_enabled: Boolean,
verified: Boolean,
statuses_count: Number,
lang: String,
status: {
		created_at: Date,
		id: Number,
		id_str: Number,
		text: String,
		truncated: Boolean,
		entities: {
			hashtags: [],
			symbols: [],
			user_mentions: [],
			urls: [{
				url: String,
				expanded_url: String,
				display_url: String,
				indices: [Number]
			}]
		},
		source: String,
		in_reply_to_status_id: String,
		in_reply_to_status_id_str: String,
		in_reply_to_user_id: String,
		in_reply_to_user_id_str: String,
		in_reply_to_screen_name: String,
		geo: String,
		coordinates: String,
		place: String,
		contributors: String,
		is_quote_status: Boolean,
		retweet_count: Number,
		favorite_count: Number,
		favorited: Boolean,
		retweeted: Boolean,
		possibly_sensitive: Boolean,
		lang: String
	},
	contributors_enabled: Boolean,
	is_translator: Boolean,
	is_translation_enabled: Boolean,
	profile_background_color: String,
	profile_background_image_url: String,
	profile_background_image_url_https: String,
	profile_background_tile: Boolean,
	profile_image_url: String,
	profile_image_url_https: String,
	profile_banner_url: String,
	profile_link_color: String,
	profile_sidebar_border_color: String,
	profile_sidebar_fill_color: String,
	profile_text_color: Number,
	profile_use_background_image: Boolean,
	has_extended_profile: Boolean,
	default_profile: Boolean,
	default_profile_image: Boolean,
	following: Boolean,
	follow_request_sent: Boolean,
	notifications: Boolean,
	translator_type: String
});



/* Use your schema to instantiate a Mongoose model */
var userSearch = mongoose.model('userSearch', userSearchSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = userSearch;
