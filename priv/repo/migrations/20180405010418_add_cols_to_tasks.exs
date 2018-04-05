defmodule TasktrackerSpa.Repo.Migrations.AddColsToTasks do
  use Ecto.Migration

  def change do
    alter table("tasks") do
      add :complete, :boolean, default: false, null: false
      add :work_time, :integer
    end
  end
end
