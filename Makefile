build:
	docker build -t p1usw/project .
run:
	docker run -d -p 8000:8000 -v note:/app/data --rm --name project p1usw/project:latest
run-dev:
	docker run -d -p 8000:8000 -v "C:/Users/syper/PycharmProjects/project:/app" -v /app/node_modules -v project:/app/data --rm --name project p1usw/project:latest
stop:
	docker stop project