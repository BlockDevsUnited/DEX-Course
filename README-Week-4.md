# DEX-Course Week 4: Publish a DEX on any mainet

## TODO
These items are still outstanding to figure out
1. [ ] Removing liquidity does not work on some DEX-es. We need to find out why.
1. [ ] We need token lists for Polygon and Rinkeby.
1. [ ] React routing on github pages seems to push the app root to ```/``` instead of ```/dex```. The app works though, just the URL is not correct.
1. [ ] Initial loading of the dex is slow. We need a loading indicator on the page to let the user know that the app is loading.
1. [ ] Add default token lists to the interface instead of importing them manually after publish

## Publish your contracts on mainnet, update sdk and integrate them with the interface
To complete this follow [README-Week-2.md](README-Week-2.md). You can choose any mainnet for deployment. We tested deploying on polygon and xdai.

## Create production build
Use your own dex repo from the previous step. To create a production build follow these steps:

1. Update homepage value in ```package.json``` to match the publishd homepage URL of your dex. It should look like this:
```
...
"homepage": "https://<your_github_username>.github.io/dex",
```

3. Inside your dex repo (the one that you cloned from DEX-Course-u-exchange) run the following:
```
nvm use --lts
yarn build
```
The above command create a folder with name ```build``` that we use to publishd on github pages

## Publish on github pages
If you do not have github pages configured for your user, you can use 
[Getting Started with Github pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site) document.

To test that your github pages are configured properly, create a simple index.html file inside the github pages repo, commit, push and check it at https://<your_github_username>.github.io

I your github pages repo, copy the build folder from your dex repo. Make sure that you change the folder name from build to dex.
```
cd <your_github_username>.github.io
cp -r <your_dex-course-u-exchange>/buil dex
```
The commit and push <your_github_username>.github.io.

Your repo will be available at the homepage that you specified in ```package.json```

## Token lists

It is easier to test your dex if you import some token lists. You can use existing token lists or create your own. 

You can import the token lists from the published dex app. Here are the steps: 
1. Exchange
2. Slect Token
3. Manage (at the bottom of the token list)
4. Token Lists
5. Paste the URL of your tokenlist file

Token lists that we used:
- xDAI: https://github.com/BlockDevsUnited/DEX-Course/blob/main/tokenlists/dex.tokenlist.json
- Polygon: TBA
- Rinkeby: TBA

## Deploying on Multiple Networks

To deploy the same dex interface on multiple networks we need to have the same factory and router contract addresses on each network. 
"The address for an Ethereum contract is deterministically computed from the address of its creator (sender) and how many transactions the creator has sent (nonce). The sender and nonce are RLP encoded and then hashed with Keccak-256." One way to achieve this by using a dedicated account for deployment on all networks.

The value of WETH that is used for the router contract constructor is different for each network. [Need details]

The interface need to be changed to reflect the supported networks. [Need details]

