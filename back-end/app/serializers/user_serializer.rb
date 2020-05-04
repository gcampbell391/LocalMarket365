class UserSerializer < ActiveModel::Serializer
  attributes :email, :first_name, :last_name, :street_name, :city, :state, :zip_code, :img
end
