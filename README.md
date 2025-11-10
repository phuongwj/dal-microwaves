# Dalhousie Microwaves

A map application (web-based) to help students locate, rate, and contribute available microwaves on campus. 

Initial database for the microwaves is provided by the posts on the [dal_microwaves](https://www.instagram.com/dal_microwave) Instagram account (huge thank you to the people doing this work).

## Running the repository locally

Download a copy of the prpoject to your computer
```bash
git clone https://github.com/phuongwj/dal-microwaves.git
```

Make sure you're in the root repository of the project to run the commands below (i.e. dal-microwaves)
```bash
cd dal-microwaves
```

For now, you can only see the map with a marker at the Goldberg Computer Science Building, to run it locally, do the following:
```bash
cd frontend
npm i
npm run dev
```

> This will forward you to the frontend directory, install all the required dependencies of the project, then run the web app locally at http://localhost:5173