
# PASSKEY ABDICATION
**Passkey Abdication** is a phishing tool that leverages the loopholes in registration of passkeys to create passkeys on attacker side while making the users thing that they have created a passkey. 

## Requirements - SPAR
1) Python >= 3.10
2) PIP
3) Poetry (Python)
4) Selenium Driver
5) Node 22+

## Installation - Django Backend (Attacker Side)

Setup the backend server to capture credentials and trigger selenium for automated passkey setup.

Create a .env file in the directory. Please refer to the .env.example file.

Example
```bash
DEBUG=1
SECRET_KEY=passkeyabdication
DJANGO_ALLOWED_HOSTS="localhost 127.0.0.1 [::1]"
CORS_ALLOWED_ORIGINS="http://localhost:8000 http://localhost:3000"
```
Open a terminal in the backend directory.
Use Poetry to install the dependancies:
```bash
poetry install
```
Please setup the selenium drivers according to your platform. We have used chrome and chrome-driver. We have included a file called testselenium.ipynb to test using a jupyter notebook.
After the installation of the dependencies and creation of the virtual environment, use the following command to use the environment:
```bash
poetry shell
```
Once the environment is activated, run the following command to setup your database:
```bash
python manage.py migrate
```
Run the following to start the server:
```bash
python manage.py runserver 0.0.0.0:8000
```
The server will start listening at [http://localhost:8000/](http://localhost:8000/)

**We can now move on and setup the front-end.**


## Installation - Frontend
The front-end is based on NextJS which required node version 22+ Please verify your node version.
Open a terminal in the frontend directory. Use the following command to set up the project.
```bash
npm install
```
Once the dependencies are installed, We can start the server using the command:
```bash
npm run dev
```
This will start a server on [http://localhost:3000/](http://localhost:3000/)
You can share this URL with the victim. This will show a google login page which asks the users to setup a passkey.



## License
[MIT](https://choosealicense.com/licenses/mit/)
