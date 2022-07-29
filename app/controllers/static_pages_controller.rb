class StaticPagesController < ApplicationController
  def index
    render "index"
  end

  def checkout
    render "checkout"
  end
end
