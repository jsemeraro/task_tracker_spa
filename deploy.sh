#!/bin/bash

export PORT=5180
export MIX_ENV=prod

PWD=`pwd`

if [ $USER != "tasks3" ]; then
	echo "Error: must run as user 'tasks3'"
	echo "  Current user is $USER"
	exit 2
fi

mix deps.get
(cd assets && npm install)
(cd assets && ./node_modules/brunch/bin/brunch b -p)
mix phx.digest
mix release --env=prod

mkdir -p ~/www
mkdir -p ~/old

NOW=`date +%s`
if [ -d ~/www/task_tracker_spa ]; then
	echo mv ~/www/task_tracker_spa ~/old/$NOW
	mv ~/www/task_tracker_spa ~/old/$NOW
fi

mkdir -p ~/www/task_tracker_spa
REL_TAR=~/src/task_tracker_spa/_build/prod/rel/tasktracker_spa/releases/0.0.1/tasktracker_spa.tar.gz
(cd ~/www/task_tracker_spa && tar xzvf $REL_TAR)

MIX_ENV=prod mix ecto.create
MIX_ENV=prod mix ecto.migrate

crontab - <<CRONTAB
@reboot bash /home/task/src/task_tracker_spa/start.sh
CRONTAB

#. start.sh