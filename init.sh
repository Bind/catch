
if [ -z "$PROJNAME" ]; then
    if [ ! -z "$1" ]; then 
        PROJNAME=$1
    else
        echo 'enter a project name: '
        read PROJNAME
    fi
fi

#check if postgres installed
RESULT=`psql -l | grep "save" | wc -l | awk '{print $1}'`;
if test $RESULT -eq 0; then
    echo "Creating Database";
    psql -c "create role save with createdb encrypted password 'save' login;"
    psql -c "create database save with owner save;"
else
    echo "Database exists"
fi

if [ -d .git ]; then
  echo "Git exists";
else
    git init .
    # git remote add origin "git@github.com:bind/save"
fi
