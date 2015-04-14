require 'spec_helper'

describe ProjectsController do
	it "displays an error for a missing project" do
		get :show, :id => "not-here"
		#response.should reidrect_to(projects_path) old syntax
		expect(response).to redirect_to(projects_path)
		message = "The project you were looking for could not be found."
		#flash[:alert].should eql(message) old syntax
		expect(flash[:alert]).to eq(message)
	end
end
