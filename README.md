# WSO API

### WSO API for client-side Javascript usage

This respository contains a package which can be used by other Javascript programs to access the WSO API.

## Installation 

It is recommended that the user has a ssh key that is configured to be recognized as one of `WilliamsStudentsOnline`'s contributors. See [here](https://github.com/settings/keys) for instructions on setting up a ssh key.

Once that is done, simply add the following line to `package.json`:

```
"wso-api": "git+ssh://git@github.com:WilliamsStudentsOnline/wso-api-client.git#master"
```

Run `node` or `yarn` accordingly to update your packages.


## Roadmap:
1. Better documentation on methods, including behavior for certain kinds of inputs
1. Figure out API autogeneration - Getting rid of `any`.
1. Document `sort` (See ephmatch)
1. Documenting `RideQuery/all` - what inputs?
1. Document preloads - what options are possible?
1. Figure out ephcatch api.