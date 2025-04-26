FROM python:3.12

RUN apt-get update -y

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install -U pip
RUN pip install -U poetry

ENV PATH="${PATH}:/root/.poetry/bin"

COPY ./ .

RUN poetry config virtualenvs.create false
RUN poetry install --no-interaction --no-ansi

# ENTRYPOINT ["./.docker/scripts/entrypoint.sh"]

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]