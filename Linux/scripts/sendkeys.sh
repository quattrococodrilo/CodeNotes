#!/bin/sh

app=$1
keyStroke=$2

# Method 1
xdotool search \
    --class $app windowactivate \
    --sync %1 \
    key $keyStroke \
    windowactivate $(xdotool getactivewindow)

# Method 2
# xdotool windowactivate $(xdotool search --class $app) &&
# xdotool key $keyStroke &&
# xdotool windowactivate $(xdotool getactivewindow)


