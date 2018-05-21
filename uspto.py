#!/bin/python3
from urllib import request, parse
import json
def expiringPatents(patents):
    url = 'https://peds.uspto.gov/api/queries' # Set destination URL here
    data = {
     'searchText': 'applId:60447158',
  'df': 'appFilingDate',
  'fq':['appFilingDate:[1988-01-01T00:00:00Z TO 2018-05-20T00:00:00Z]'],
  'qf': 'appFilingDate,applId,patentNumber',
  'sort': 'appFilingDate asc',
  'facet':'false' }
    data = json.dumps(data)
    data = str(data)
    data = data.encode('utf-8')

    req = request.Request(url, data=data)
    resp = request.urlopen(req)
    print(resp)
expiringPatents(1)
