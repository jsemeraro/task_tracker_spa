defmodule TasktrackerSpa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :descrip, :string
    field :title, :string
    field :complete, :boolean, default: false
    field :work_time, :integer
    belongs_to(:user, TasktrackerSpa.Users.User)

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :descrip, :user_id, :complete, :work_time])
    |> validate_required([:title, :descrip, :user_id, :complete, :work_time])
  end
end
