Start-Process -FilePath "../rest/mongo/launchMongo.bat" -WorkingDirectory "../rest/mongo/"
Start-Process -FilePath "../rest/go.bat" -WorkingDirectory "../rest/"
Start-Process -FilePath "./start.bat" -WorkingDirectory "./"