# Load Testing using cURL

## Introduction
cURL stands for client URL. It is command line tool used to send http requests. It can be used to do load testing with less preparation time. 

## Implementation Example
### Sequential Execution Command 
```
curl --config config.txt
```
### Parallel Execution Command
```
curl --parallel --parallel-immediate --config config.txt
```

Here, In both command, 
* config.txt is common. config.txt will have list of url and its header, post data. 
* Each request is separated by `next` word. 
* To Print the execution time of each request, curl-format.txt is created and used in the input parameter.

**config.txt format**
```
# First Request
url=
header=
header=
write-out="@curl-format.txt"
output=1.txt

# Next Request 
next

# Second Request
url=
header=
header=
write-out="@curl-format.txt"
output=2.txt

# Next Request
next

# 3rd request
url=
header=
header=
write-out="@curl-format.txt"
output=3.txt
```

**curl-format.txt**
```
   time_namelookup:  %{time_namelookup}s\n
      time_connect:  %{time_connect}s\n
   time_appconnect:  %{time_appconnect}s\n
  time_pretransfer:  %{time_pretransfer}s\n
     time_redirect:  %{time_redirect}s\n
time_starttransfer:  %{time_starttransfer}s\n
		----------\n
        time_total:  %{time_total}s\n
############################################\n
```
