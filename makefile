all: demo.js ask
	@echo "The prokect is ready to run! Next time, just do 'make run' to run normally"
	@node demo.js

ask: check
	@bash ask.bash
	clear
	@echo "Nodemon, Express, and Pug has been installed."

check:
	@echo "Checking for npm..."
	@npm --version
	@echo "npm is installed, continuing"

get:
	@npm install pug express nodemon

run:
	@nodemon demo.js