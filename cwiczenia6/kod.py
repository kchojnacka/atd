import requests

requests.put('http://localhost:8098/buckets/s23698/keys/100', data = {'id':100, 'name':'Janina Testowa', 'age':34, 'coesFromPoland':True})
print(requests.get('http://localhost:8098/buckets/s23698/keys/100').text)

requests.post('http://localhost:8098/buckets/s23698/keys/100', data = {'id':100, 'name':'Janina Testowa', 'age':28, 'comesFromPoland':True})
print(requests.get('http://localhost:8098/buckets/s23698/keys/100').text)

requests.delete('http://localhost:8098/buckets/s23698/keys/100')
print(requests.get('http://localhost:8098/buckets/s23698/keys/100').text)