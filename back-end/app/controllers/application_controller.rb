class ApplicationController < ActionController::API
    protect_from_forgery except: :index
    
end
