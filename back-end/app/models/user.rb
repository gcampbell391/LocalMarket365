class User < ApplicationRecord
    has_many :orders
    has_secure_password
    validates :email, uniqueness: {case_sensitive: false}
    attr_accessor :password
    
    def authenticate(plaintext_password)
            if BCrypt::Password.new(self.password_digest) == plaintext_password
                self
            else
                false
            end
        end
    end
