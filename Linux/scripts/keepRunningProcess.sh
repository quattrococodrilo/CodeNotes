#!/bin/sh

# Run firefox-esr on start and reopen if it is closed.

process=$(pgrep firefox-esr)
while true
do
    if[ ! $process ]
    then
        firefox-esr $1
    fi
done

