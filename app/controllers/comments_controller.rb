class CommentsController < ApplicationController
  def create
    @comment = Comment.create(content: comment_params[:content], user_id: comment_params[:user_id], product_id: comment_params[:product_id])
    respond_to do |format|
      format.html { redirect_to product_path(params[:product_id])  }
      format.json
    end
  end

  def show
  end

  def comment_params
    #ユーザーログイン機能が出来たらuser_id:current_user.idにする
    params.require(:comment).permit(:content).merge(user_id:1, product_id:params[:product_id])
  end

end