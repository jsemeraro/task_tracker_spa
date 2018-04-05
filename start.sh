#!/bin/bash

export PORT=5180

cd ~/www/task_tracker_spa
./bin/tasktracker_spa stop || true
./bin/tasktracker_spa start
