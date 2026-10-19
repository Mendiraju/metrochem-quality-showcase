#!/bin/sh
# Static preview server for the Lovable sandbox only.
# The real site needs no server code — any static host (e.g. GitHub Pages) serves it as-is.
exec python3 -m http.server 8080
