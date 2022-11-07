# Secure IT

Whenever you write code that other people can interact with, you should be aware of how it can be attacked for malicious purposes.

While it takes several years to master just one area of IT security, as a professional Software Engineer you should be familiar at least with the most common attack vectors and how to mitigate them.

[OWASP](https://www.owasp.org/) is one of the organizations that is most committed to study web security. They regularly publish the [top ten vulnerabilities](https://owasp.org/www-project-top-ten/) found in web applications.

Frameworks generally have some built-in functionality to mitigate certain attacks, but it’s important for you to understand what are the underlying principles that drive them.

Throughout this exercise you can see how these vulnerabilities work in a real environment, and how to defend your app from them!

## Getting started

1. Make sure you have [MongoDB](https://www.mongodb.com/) installed and running
2. Install [Grunt](https://gruntjs.com/) globally with `npm install -g grunt-cli`
3. Clone the app repo `git clone https://github.com/OWASP/NodeGoat.git`
4. Inside the repo folder:
   - `npm install`
   - `npm run db:seed` (populates the db with data)
   - `npm run dev` (runs the server with [Nodemon](https://github.com/remy/nodemon), which automatically restarts it whenever you modify a file).

## Tasks

This exercise has two sides. On one side, you have the tutorial content that can be accessed at http://localhost:5000/tutorial.

On the other side, you have the app running at http://localhost:5000, where you can log in with username `user1` and password `User1_123`.

Starting from the tutorial, go through each attack type. Whenever you find a short video that shows the attack in practice, try replicating it and expanding upon it in the live app, based on what you’ve learnt.

Once you feel you have a good understanding of the underlying problem, go in the source code and fix it, making sure to remove the vulnerability source.

## Troubleshooting

In case you experience any issues while trying to set the NodeGoat environment up, go through the following list of recommended practices and common issues and check the accompanying solution on each case.

1. Make sure you have MongoDB running before executing `npm run db:seed`

2. If you get an Error while trying to populate the database or the process never ends (takes more than a minute or two), make sure to install the appropriate `mongodb` package version: 

```bash
npm install mongodb@2.1.18
```

On top of that, you might need to manually install the correct `swig` version (=== 1.4.2) if your package.json contains a different version (e.g. 0.14.0):

```bash
npm install swig@1.4.2
```

3. If you get an error stating that the PORT 5000 address is already in use, then you are probably running Monterey on Mac and need to disable the `AirPlay Receiver` that is using port 5000.

You can disable in **System Preferences --> Sharing --> AirPlay Receiver**.

The following 2 commands will (1) show the listening ports on your machine and (2) the applications/services that are using the ports:

```bash
$ netstat -an -ptcp | grep LISTEN
tcp4       0      0  *.8080        *.*    LISTEN     

$ lsof -i TCP:8080 | grep LISTEN
node    3342 johndoe   23u  IPv4 0x709c93c314e2477f      0t0  TCP *:http-alt (LISTEN)
```

References: [A](https://www.reddit.com/r/webdev/comments/qg8yt9/apple_took_over_port_5000_in_the_latest_macos/) / [B](https://developer.apple.com/forums/thread/682332)

4. Running `npm run db:seed` produces some kind of error, for example like the following:

```
{"name":"MongoError","message":"failed to connect to server [localhost:27017] on first connect [Error: connect ECONNREFUSED ::1:27017\n    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1157:16) {\n  name: 'MongoError'\n}]"}
```

Solution: find the mongo db config files (e.g. `/config/env/all.js`) and replace `localhost` with its IP version: 127.0.0.1 and try running the command again.

References: [A](https://www.liquidweb.com/kb/edit-host-file-windows-10/) / [B](https://mongoosejs.com/docs/4.x/docs/connections.html)

5. If you are getting an error double check if you are on a **LTS** version of node. Some of the packages may not be updated to work on Node 17+