defmodule TasktrackerSpa.Repo.Migrations.AddEmailToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :email, :text
    end
  end
end
