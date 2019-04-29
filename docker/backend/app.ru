# encoding: utf-8

class SimpleServer
  def call(env)
    req = Rack::Request.new(env)
    case req.path_info
    when /hello/
      [200, {"Content-Type" => "text/html"}, ["Hello World!"]]
    else
      [404, {"Content-Type" => "text/html"}, ["I'm Lost!"]]
    end
  end
end
run SimpleServer.new
