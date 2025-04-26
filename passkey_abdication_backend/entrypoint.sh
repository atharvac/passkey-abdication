#!/bin/sh

set -e

# Run migrations
echo "Running migrations..."
python manage.py migrate

# Start the server
echo "Starting server..."
exec "$@"
