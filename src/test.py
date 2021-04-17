from firebase import firebase
firebase = firebase.FirebaseApplication('https://aapi-firebase-default-rtdb.firebaseio.com/', None)
result = firebase.get('/items', None)

print(result)