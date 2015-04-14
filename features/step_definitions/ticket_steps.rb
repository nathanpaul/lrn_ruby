Given /^that project has a ticket:$/ do |table|
	table.hashes.each do |attributes|
		@project.tickets.create!(attributes)
	end
end

Then(/^then I should not see "(.*?)"$/) do |string|
  expect(page).not_to have_content(string)
end
