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

  def edit_address_by_address_id
    if session
      @address = Address.find_by(id: params[:id])

      if @address and @address.update(address_params)
        render "api/addresses/show"
        #TODO: the show.jbuilder is still not completed
      else
        render json: { success: false }
      end
    else
      render json: { success: false }
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
