FROM python:3.9.0

WORKDIR /home/

RUN echo "stack배포 할때마다 바꾸기"

RUN git clone <본인 깃허브의 clone 주소>

WORKDIR /home/<본인 깃허브의 레포이름>/

RUN python -m pip install --upgrade pip

RUN pip install -r requirements.txt

RUN pip install gunicorn

RUN pip install mysqlclient

EXPOSE 8000

CMD ["bash", "-c", "python manage.py collectstatic --noinput --settings=vium.settings.deploy && python manage.py migrate --settings=vium.settings.deploy && gunicorn vium.wsgi --env DJANGO_SETTINGS_MODULE=vium.settings.deploy --bind 0.0.0.0:8000"]