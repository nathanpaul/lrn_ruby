class Admin::UsersController < Admin::BaseController
	before_filter :authorize_admin!
  def index
  	@users = User.all(:order => "email")
  end

  def new
  	@user = User.new
  end

  def create
  	#can't create dupe, need to set :admin and other protected attributes outside of the "new" method.
	@user = User.new(params[:user].except(:admin))
	@user.admin = params[:user][:admin] == "1"
		if @user.save
		  flash[:notice] = "User has been created."
		  redirect_to admin_users_path
		else
		  flash[:alert] = "User has not been created."
		  render :action => "new"
		end
	end
end