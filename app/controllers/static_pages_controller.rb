class StaticPagesController < ApplicationController
  def index
    render "index"
  end

  def login
    render "login"
  end

  def signup
    render "signup"
  end
end
