# get schema from github bourbon
[ ! -d bourbon ] && git clone https://github.com/superb-archive/bourbon
cd bourbon && git checkout main && git pull && cd ..

SOURCE="bourbon/graph"
TARGET="src/graphql"
# write schema to src/graphql/schema.graphql
## first write schema.graphql
cat $SOURCE/schema.graphql > $TARGET/schema.graphql
## concat rest of *.graphql
ls $SOURCE/*.graphql | grep -v $SOURCE/schema.graphql | xargs cat >> $TARGET/schema.graphql

echo "Schema synced with bourbon."