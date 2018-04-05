#!/bin/bash

export PORT=5180

cd ~/www/task_tracker_spa
./bin/task_tracker_spa stop || true
./bin/task_tracker_spa start
