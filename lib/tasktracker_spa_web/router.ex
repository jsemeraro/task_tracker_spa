defmodule TasktrackerSpaWeb.Router do
  use TasktrackerSpaWeb, :router
  alias TasktrackerSpa.Users

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
    plug(:get_user)
  end

  # followed nat's lecture 12 notes for plugs and this link for conn: https://devhints.io/phoenix-conn
  def get_user(conn, _params) do
    IO.inspect (conn |> get_req_header("authorization"))
    if length(conn |> get_req_header("authorization")) > 0 do
      [token] = conn |> get_req_header("authorization")
      {resp, user_id} = Phoenix.Token.verify(conn, "auth token", token, [])
      user = Users.get_user!(user_id)
      conn |> assign(:user, user)
    else
      conn |> assign(:user, nil)
    end
  end

  scope "/", TasktrackerSpaWeb do
    # Use the default browser stack
    pipe_through(:browser)

    get("/", PageController, :index)
    get("/users", PageController, :index)
    get("/tasks", PageController, :index)
    get("/users/:id", PageController, :index)
  end

  # Other scopes may use custom stacks.
  scope "/api/v1", TasktrackerSpaWeb do
    pipe_through(:api)
    resources("/users", UserController, except: [:new, :edit])
    resources("/tasks", TaskController, except: [:new, :edit])
    post("/token", TokenController, :create)
  end
end
