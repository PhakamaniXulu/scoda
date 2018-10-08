# SCODA - Flask
SCODA Website Repository

## Readme Contents
- [Project Documentation Links](/README.md#project-documentation-links)
- [Creative Resources](/README.md#creative-resources)
- [Website Environments](/README.md#website-environments)
- [Frontend Setup](/README.md#frontend-setup)
- [Backend Setup](/README.md#backend-setup)
- [Module List and Syntax](/README.md#module-list-and-syntax)
- [Techinical Specs For QA](/README.md#technical-specs-for-qa)
- [Caveats, Dev Notes and or Outstanding Bugs](/README.md#caveats-dev-notes-and-or-outstanding-bugs)

#### Information Resources
- Needs info

## Creative Resources
- [SCODA UI](https://projects.invisionapp.com/d/main#/projects/prototypes/15567383)
- Needs Design Spec


## Website Environments
- [Staging Environment]()
- No Live Environment yet

## Frontend Setup
### Setting up Frontend Boiler Plate with Gulp and NPM
#### The following dependencies are being used:
- Util      - Log custom messages to the terminal
- Sass      - CSS pre-processor
- Uglify    - Minifies all JS files
- Concat    - Concatenate any JS or CSS files in the styles or js directories
- Connect   - Live Server Reload

_Before starting, make sure the gulpfile.js and package.json files are in the root/app directory._
Then do the following:
1. Make sure you have [node.js](https://nodejs.org/dist/v8.11.2/node-v8.11.2-x64.msi) installed on your local machine
2. [NPM](https://www.npmjs.com/get-npm) should be installed with node already, press the following to check if it has and what version
`npm -v`
3. Now we want to install gulp globally
`npm install --global gulp`
4. Now install the dependencies in the package.json file
`npm install`
5. Now all your node plugins are installed, and all that's left is to run the gulp task manager by typing:
`gulp`

## Backend Setup
### Setting up the Environment with Python and pip
* clone the repo
* install a virtual env and activate it: `virtualenv --no-site-packages env; source env/bin/activate`
* install requirements: `pip install -r requirements.txt`

### Setting up the Database with PostgreSQL
Setup the PostgreSQL database (minimum version 9.6.*)
```
psql -U postgres
=# CREATE USER SCODA WITH PASSWORD 'SCODA';
=# CREATE DATABASE SCODA;
=# GRANT ALL PRIVILEGES ON DATABASE SCODA TO SCODA;
=# \q
```
Construct your db app-side:
```
from opendatadurban.models import db
from opendatadurban.models.seeds import seed_db
run 'python rebuild_db.py'
```

#### Deploying database changes
* SCODA App uses Flask-Migrate (which uses Alembic) to handle database migrations.
* To add a new model or make changes, update the SQLAlchemy definitions in `opendatadurban/models/`. Then run
`python app.py db migrate --message "a description of your change"`
* This will autogenerate a change. Double check that it make sense. To apply it on your machine, run
`python app.py db upgrade head`

## Module list and syntax
// Coming Soon

## Technical Specs for QA

#### Device and Browser Information
V1.0 will be a mobile first web-app, designed purely for mobile but viewable by web.
The following browsers and devices need to be 100% design match:
- Latest 3 Chrome, IE, Edge, Firefox Desktop
- Latest 2 Chrome, Edge, Safari Mobile

## Caveats, Dev Notes and or Outstanding Bugs
