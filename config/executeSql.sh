#!/bin/bash

server=$1
ipRegex="([0-9]{1,3}\.){3}[0-9]{1,3}";
serverIp=$(ping $server -c 1 | grep -E $ipRegex | awk '{print $2}' FS="(" | awk '{print $1}' FS=")" | line);
baseIp=$(echo $serverIp | awk '{print $1}' FS=".11");
sqlScript="$2";
if [ -f “$2” ]
then
    sqlScript=”$(cat $sqlScript)”;
fi
successIn="Success in:\n";
for ipEnd in $(seq 41 70)
do
    ip=$baseIp.$ipEnd;
    echo "Connecting to $ip";
    mysql --host $ip -u usercr2 --password=usercr2 --connect-timeout=5 CRPOS -e "$sqlScript";
    if [ $? -eq 0 ]
    then
   	 echo "Execution success...";
   	 successIn="$successIn	$ip\n";
    else
 	 echo "Execution fail...";
    fi
done

echo -e "$successIn";
