defmodule TasktrackerSpa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :descrip, :string
    field :title, :string
    # field :user_id, :id
    belongs_to(:user, TasktrackerSpa.Users.User)

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :descrip, :user_id])
    |> validate_required([:title, :descrip, :user_id])
  end
end
