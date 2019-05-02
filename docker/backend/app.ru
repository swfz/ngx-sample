# encoding: utf-8
require 'json'

class SimpleServer
  def heloes(id = nil)
    heloes = [
      {id: 1, name: 'urtraman'},
      {id: 2, name: 'batman'},
      {id: 3, name: 'spiderman'},
    ]
    id.nil? ? heloes : heloes.find{|h| h[:id] == id.to_i}
  end

  def text_header(type)
    {"Content-Type" => "text/#{type}"}
  end

  def call(env)
    req = Rack::Request.new(env)
   p req.path_info
    case req.path_info
    when /hello/
      [200, {"Content-Type" => "text/html"}, ["Hello World!"]]
    when /api\/heroes\/(\d)/
      hero = heloes($1)
      if hero.nil?
        [404, text_header('html'), ['Hero not found.']]
      else
        [200, text_header('json'), [hero.to_json]]
      end
    when /api\/heroes/
      [200, text_header('json'), [heloes.to_json]]
    else
      [404, {"Content-Type" => "text/html"}, ["I'm Lost!"]]
    end
  end
end
run SimpleServer.new
