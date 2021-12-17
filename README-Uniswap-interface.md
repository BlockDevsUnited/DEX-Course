# Uniswap V2 interface how to

## Clone the repo
```
git clone git@github.com/BlockDevsUnited/DEX-Course-u-exchange.git
cd DEX-Course-u-exchange
```

## Install dependencies and start on localhost
```
nvm install --lts #install lts version for npm
nvm use --lts  
yarn
yarn start
```

## Build for production 
We will publish to github pages under <user_github_name>. The dex app URL will be https://<user_github_name>.github.io/dex

1. In ```package.json```, make sure that you specify the correct dex app URL for the 'homepage' keyword.

2. Customize colors and logos
Replace with your logos the files in the ```assets``` folder. 

3. Build for production
```
yarn build
```

## Publish to github pages
```
git clone https://github.com/<user_github_name>
cp -r build <user_github_name>/dex
git commit ...
git push 
```
You should be able to run the dex app URL