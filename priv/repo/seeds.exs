# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TasktrackerSpa.Repo.insert!(%TasktrackerSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias TasktrackerSpa.Repo
  alias TasktrackerSpa.Users.User
  alias TasktrackerSpa.Tasks.Task

  def run do
    p = Comeonin.Argon2.hashpwsalt("password1")
    p2 = Comeonin.Argon2.hashpwsalt("password2")
    p3 = Comeonin.Argon2.hashpwsalt("password3")
    p4 = Comeonin.Argon2.hashpwsalt("password4")

    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "alice", password_hash: p })
    b = Repo.insert!(%User{ name: "bob",  password_hash: p2})
    c = Repo.insert!(%User{ name: "carol",  password_hash: p3})
    d = Repo.insert!(%User{ name: "dave",  password_hash: p4})

    Repo.delete_all(Task)
    Repo.insert!(%Task{ user_id: a.id, title: "Alice", descrip: "Hi, I'm Alice", complete: false, work_time: 15 })
    Repo.insert!(%Task{ user_id: b.id, title: "Bob", descrip: "Hi, I'm Bob", complete: false, work_time: 15 })
    Repo.insert!(%Task{ user_id: b.id, title: "Bob", descrip: "Hi, I'm Bob Again", complete: false, work_time: 15 })
    Repo.insert!(%Task{ user_id: c.id, title: "Carol", descrip: "Hi, I'm Carol", complete: false, work_time: 15 })
    Repo.insert!(%Task{ user_id: d.id, title: "Dave", descrip: "Hi, I'm Dave", complete: false, work_time: 15 })
  end
end

Seeds.run
