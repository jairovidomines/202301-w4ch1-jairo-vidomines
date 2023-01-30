# Data

## Data layer

- List of gentlemen
  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternativeText
  - selected

## Data modifications

- Toggle selected property of gentleman
- Select all gentlemen
- Delete a gentleman

# Components

## App

- Contains the gentlemen list / variable estado
- Contains the functions "toggle"
- Contains the functions "select all"
- Contains the functions "delete"
- Sends the function "delete" and "toggle" to gentleman
- Sends the function "select all" to button
- Sends the list of gentlemen to info

## Info

- Receives the list of gentlemen from App
- Display number of selected gentlemen

## Button (could be a <a>)

- Receives the function to "select all"

## Gentleman

- Receive the function "toggle"
- Receive the function "delete"
- Receive a gentlemen
