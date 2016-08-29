# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique (not sure if requiring this yet)
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
state       | string    |
country     | string    | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
date        | date      | not null
time        | time      | not null
location    | string    | not null
limit       | integer   | not null
host_id     | integer   | not null, foreign key (references host), indexed (should be current user)
city_id     | integer   | not null, foreign key (references city), indexed (should be current user's city)
description | text      |

## hosts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    | not null
city_id     | integer   | not null, foreign key (references city), indexed
