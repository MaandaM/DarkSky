import requests
import json

valueToSearch = "pretoria"  # test

url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+valueToSearch + \
    ".json?access_token=pk.eyJ1IjoibWFhbmRhIiwiYSI6ImNqd2dld3NwZTF2b2UzeW1xMDdmYW1wdngifQ.AQrKj9DG8uTrTMG12GA5Fg"
response = requests.get(url)
print(response.json)
