Given(/^there are the following users:$/) do |table|
  # table is a Cucumber::Ast::Table
  table.hashes.each do |attributes|
  	@user = User.create!(attributes)
  end
end