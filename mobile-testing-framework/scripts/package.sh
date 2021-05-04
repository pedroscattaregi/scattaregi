set -e

# Remove ddist foldder if exists
if [ -e dist ]; then
  rm -rf dist
fi

# install prod dependencies
echo "install step"
yarn install

# generate bundle
echo "build step"
yarn build

# add environment script
mkdir -p dist/scripts
cp scripts/environment.sh dist/scripts

# add package json in package
echo "creating package step"
cp package.json dist

# add tsconfig
cp tsconfig.json dist

# add feature files in package
echo "copying feature files"
cp -r src/features/*.feature dist/src/features

# add config files in package
echo "copying config files"
cp -r config/app-data dist/config
cp ./config.json dist/

cd dist
ls

# zip dist and remove
zip -r ../bundle.zip ./