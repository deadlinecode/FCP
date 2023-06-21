# FCP - Forge Control Panel

## Setup

You need to have a forge server already setup and port 80 needs to be free (or 443 if you want to use ssl).
<br />
<br />
Grab the linux or windows binary from the [releases page](https://github.com/deadlinecode/FCP/releases).
<br />
Create a `config.json` file in the same directory as the binary.
<br />
The config should look like this

```json
{
  "server": "/root/forgeServer",
  "ssl": "/etc/letsencrypt/live/example.com/",
  "jwt": "b6f5dc25-5d1d-4bb9-a996-b9a93cabd553",
  "user": {
    "name": "admin",
    "password": "admin"
  }
}
```

`server` is the path to your forge server.
<br />

`ssl` is the path to your ssl certificates - the script tries to get `privkey.pem`, `fullchain.pen` and `chain.pem` from this dir 
<br />
(Optional and should be used on Linux Servers).
<br />

`jwt` is a random string used for jwt tokens.
<br />

`user` contains the username and password for the login on the website.

<br />
<br />
Run the binary and go to `http://localhost` to access the control panel (or your domain with https if you setup ssl).
