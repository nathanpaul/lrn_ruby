# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Ticketee::Application.initialize!

Ticketee::Application.configure do
	config.assets.compile = true
end
