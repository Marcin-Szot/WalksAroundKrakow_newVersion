class PostsController < ApplicationController

  http_basic_authenticate_with name: "---", password: "---", except: [:index, :show]

  def index
    @posts = Post.all.reverse_order
    @number_of_posts = Post.all.count
    @categories = Category.all
    @number_of_categories = Category.all.count
  end

  def index_admin
    @posts = Post.all.reverse_order
    @number_of_posts = Post.all.count
    @categories = Category.all
    @number_of_categories = Category.all.count
  end

  def create
    @post = Post.new(params[:post].permit(:title, :text))
    if @post.save
      redirect_to '/index_admin'
    else
      render 'new'
    end
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(params[:post].permit(:title, :text))
      redirect_to '/index_admin'
    else
      render 'edit'
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to '/index_admin'
  end

end
