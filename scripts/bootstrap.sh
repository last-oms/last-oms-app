#!/usr/bin/env sh

set -e

eval "$(curl -sfLS https://import.sh)"

import "confirm@0.1.1"

bootstrap_volta() {
  echo "This script will install Volta (https://volta.sh) to manage your Node & npm versions."
  confirm "Continue? [yN]" || return 0

  command -v volta > /dev/null \
    && echo "Volta was already found on your device. Skipping install..." \
    && return 0

  curl https://get.volta.sh | bash
}

main() {
  bootstrap_volta || return $?
}

main || exit $?
