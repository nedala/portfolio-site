#!/bin/sh

HTPASSWD_PATH="/etc/nginx/.htpasswd"

# Only generate if not already present
if [ ! -f "$HTPASSWD_PATH" ]; then
  if [ -n "$NGINX_AUTH_USER" ] && [ -n "$NGINX_AUTH_PASS" ]; then
    echo "[i] Generating .htpasswd for $NGINX_AUTH_USER"
    htpasswd -cb "$HTPASSWD_PATH" "$NGINX_AUTH_USER" "$NGINX_AUTH_PASS"
  else
    echo "[!] NGINX_AUTH_USER and NGINX_AUTH_PASS must be set!"
    exit 1
  fi
else
  echo "[i] Using existing .htpasswd file"
fi

exec "$@"
