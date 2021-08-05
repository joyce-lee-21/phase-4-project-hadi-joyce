# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'example.com'
#
#     resource '*',
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    frontend_hosts= (ENV['FRONTEND_HOST'] || "").split(",")
    frontend_hosts.each do |host|
     puts "Whitelisting host #{host}"
     allow do
       
       origins host
   
       resource '*',
         headers: :any,
         expose: ["etag", "pagination-per-page", 'pagination-current-page', 'pagination-total-pages', 'pagination-total-count'],
         methods: [:get, :post, :put, :patch, :delete, :options, :head]
       end
   
    end
   
     allow do
       origins  'http://localhost:4000'
   
       resource '*',
         headers: :any,
         credentials: true,
         expose: ["etag", "pagination-per-page", 'pagination-current-page', 'pagination-total-pages', 'pagination-total-count', "access-control-allow-credentials"],
         methods: [:get, :post, :put, :patch, :delete, :options, :head]
     end
   end