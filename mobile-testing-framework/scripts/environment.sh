
if [ "$1" != "prod" ] && [ "$1" != "preprod" ] && [ "$1" != "staging" ] && [ "$1" != "testing" ]
then
  echo "Error: A valid environment is required \n Use one of the following enviroments: prod, preprod, staging, testing \n"
  exit 1
fi

echo "$1 is being set as environment"
cp config/app-data/app-data-$1.json app-data.json
