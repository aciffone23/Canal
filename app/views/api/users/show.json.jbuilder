json.user do
        json.extract! @user, :id, :email,  :name, :created_at
end