class Api::AddressesController < ApplicationController
  def create
  end

  def index
    if session
      @addresses = session.user.addresses
      render "api/addresses/index"
    else
      render json: { addresses: [] }
    end
  end

  private

  def address_params
    params.require(:address).permit(
      :first_name,
      :last_name,
      :billing_email,
      :phone_number,
      :address_1,
      :address_2,
      :district,
      :region,
      :is_billing
    )
  end

  def session
    token = cookies.signed[:ecommerce_session_token]
    session = Session.find_by(token: token)
  end
end
