# Some useful information and references

| Content           | Description                                                 | last update   |
| ----------------- | ----------------------------------------------------------- | ------------- |
| [Redux](./redux/) | New Redux with redux toolkit (incomplete async redux thunk) | 8 August 2022 |
| Functions         | Unit tested useful functions                                | -             |

## Some useful templates

| Content                                                   | Description                                                     |
| --------------------------------------------------------- | --------------------------------------------------------------- |
| `npx create-react-app my-app --template redux`            | To create react app with redux template                         |
| `npx create-react-app my-app --template cra-template-pwa` | To create react app with PWA template with serviceWorkers setup |

##### pm2 process.json

```
{
    "apps" : [{
        "name" : "name",
        "script" : "./server.js",
        "watch_options" : {"usePolling" : true},
        "watch" : ["server.js"],
        "ignore_watch" : ["./processes.json"],
        "log_date_format" : "YYYY-MM-DD HH:mm Z"
    }]
}

```

##### scp

`scp -r [dir] root@ip:[dir]` or `scp -r root@ip:[dir] [dir]`
