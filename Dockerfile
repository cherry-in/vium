FROM python:3.9.0

WORKDIR /home/

RUN echo "stack배포1"

RUN git clone https://github.com/cherry-in/vium.git

WORKDIR /home/vium/

RUN python -m pip install --upgrade pip

RUN pip install -r requirements.txt

RUN pip install gunicorn

RUN pip install mysqlclient

EXPOSE 8000

CMD ["bash", "-c", "python manage.py collectstatic --noinput --settings=Vium.settings.deploy && python manage.py migrate --settings=Vium.settings.deploy && gunicorn Vium.wsgi --env DJANGO_SETTINGS_MODULE=Vium.settings.deploy --bind 0.0.0.0:8000"]