# express-js-server

Though it is possible to parse requests and send responses, work with I/O, etc. without the aid of a framework, it is the equivalent of re-inventing the wheel as I demonstrated in my previous project: "first-node-server" where I parsed text input from a user and wrote it to a file without using a framework.

We do not need to re-write all of the nitty gritty details behind server logic every time we want to create a new website or piece of software.

For this reason, we utilize Express.js to allow us to focus on the details of our application and what sets it apart from other applications rather than getting caught up in defining how a Buffer should concatenate a stream of data in order to parse it into an array then extract a string from that array, all just to get a user's text input!

Why Express.js over other frameworks? Probably for the same reason React is currently the most popular front-end framework. It streamlines basic tasks without attempting to be a swiss-army knife.