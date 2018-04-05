defmodule TasktrackerSpaWeb.TaskView do
  use TasktrackerSpaWeb, :view
  alias TasktrackerSpaWeb.TaskView
  alias TasktrackerSpaWeb.UserView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      title: task.title,
      descrip: task.descrip,
      user: render_one(task.user, UserView, "user.json"),
      complete: task.complete,
      work_time: task.work_time}
  end
end
