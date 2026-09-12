#!/usr/bin/env bash
# RUDRA installer — copies the binaries to /usr/local/bin (or ~/.local/bin).
set -e
DEST="${1:-/usr/local/bin}"
if [ ! -w "$DEST" ]; then DEST="$HOME/.local/bin"; mkdir -p "$DEST"; fi
cp bin/rudra bin/rudrac bin/ruxpkg bin/rudra-lsp "$DEST/"
chmod +x "$DEST"/rudra "$DEST"/rudrac "$DEST"/ruxpkg "$DEST"/rudra-lsp
echo "Installed RUDRA to $DEST"
echo "Make sure $DEST is on your PATH, then run: rudra version"
