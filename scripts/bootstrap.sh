#!/usr/bin/env sh

set -e

eval "$(curl -sfLS https://import.sh)"

import "importpw/confirm@0.1.0"

bootstrap_volta() {
  echo "This script will install Volta (https://volta.sh) to manage your Node & npm versions."
  confirm "Continue? [yN]" || return 0

  command -v volta > /dev/null \
    && echo "Volta was already found on your device. Skipping install..." \
    && return 0

  curl https://get.volta.sh | bash
}

bootstrap_pnpm() {
  echo "This script will install or update pnpm through corepack."
  confirm "Continue? [yN]" || return 0

  corepack="$(dirname $(volta which node))/corepack"

  $corepack enable
  $corepack prepare --activate pnpm@$(jq -r '.volta.pnpm' package.json)
}

main() {
  bootstrap_volta || return $?
  bootstrap_pnpm || return $?
}

main || exit $?
