# NFC Challenge

This game is designed to replicate an advertising campaign run by Mc Donalds. The basic idea is that a user touches their phone against an advert and an embedded NFC tag launches a web app showing a countdown. The user is encouraged to get to a destination before the timer runs out to gain a reward. When the user touches their phone against the second NFC tag, they are either shown comiseraions or a voucher.

The app utilises the HTML5 local storage API. It can be simulated with two browser windows but for full effect requires an NFC enabled phone (sorry Apple fans).

## Setting up NFC tags

I've found [Radpid NFC](http://rapidnfc.com/) to be an invaluable source about all things NFC as well as a good place to get hold of a variety of tags. To write URLs to NFC tags, I recommend TagWriter by NXP (an Android application).

The two URLs that need writing to the tags are:

````
http://something-queer-1234.herokuapp.com
http://something-queer-1234.herokuapp.com/arrived
````

## Running The App Locally

### Prerequisites

I am assuming you have Node.js and NPM installed locally on your machine. If you do not, you can download it [here](http://nodejs.org/download).

### Running the server

From a terminal window run the following commands from the root of this repo:
```
npm install
node index.js
```
By default, the server runs at [http://localhost:5000](http://localhost:5000).

## Deploying to Heroku

### Prerequisites

As well as all the prerequisites of the previous section, I am assuming you have the Heroku toolbelt installed on your machine and have signed up for a free Heroku account. Details of this can be found on the [heroku website](http://heroku.com).

### Deploying the server

From a terminal window login with your Heroku account details using the `heroku login` command.

You can run the server locally using `foreman start` to make sure things are in order before you deploy the app.

When you are ready to deploy, make a git commit before running the following two commands:
```
heroku create
git push heroku master
```
If the second command throws an error similar to this:
```
Permission denied (publickey).
fatal: The remote end hung up unexpectedly
```
Try running the following command to upload your public key to Heroku: (credit to [this stackoverflow answer](http://stackoverflow.com/questions/4269922/permission-denied-publickey-when-deploying-heroku-code-fatal-the-remote-end) for this particular fix.
```
heroku keys:add ~/.ssh/id_rsa.pub
```
More info about using ssh with Heroku can be found [here](https://devcenter.heroku.com/articles/keys#adding_keys_to_heroku)). Your app should now be live and can be visited with the command:
```
heroku open
```

By default, you will be running one dyno. This can be changed with the following command (this will incur costs to your Heroku account):
```
heroku ps:scale web=2 #for running 2 dynos
```
To learn more about dynos and scaling, visit the [Heroku documentation](https://devcenter.heroku.com/articles/dynos). Info about dynos and billing can be found [here](https://devcenter.heroku.com/articles/usage-and-billing).

## Configuring the App

To change different aspects of the app, got to `http://something-queer-1234.herokuapp.com/settings` and configure it according to your requirements. Going to `http://something-queer-1234.herokuapp.com/settings/get` will display the current settings in raw JSON form.