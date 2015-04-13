module ApplicationHelper
	def title(*parts)
		unless parts.emtpy?
			content_for :title do
				(parts << "Ticketee").join(" - ") unless parts.empty?
			end
		end
	end
end
