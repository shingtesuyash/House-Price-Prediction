from flask import Flask, app,request,jsonify,url_for
import os
import pickle
import json
import numpy as np
import util



from flask_cors import CORS
app= Flask(__name__, static_folder='./build', static_url_path='/')
cors=CORS()

os.environ.get('PORT', 3000)

@app.route('/')
def index():
    return app.send_static_file('index.html')




@app.route('/get_location_names',methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():
    data=request.get_json()
    total_sqft = float(data['total_sqft'])
    location = data['location']
    bhk = int(data['bhk'])
    bath = int(data['bath'])

    print("data is",data['location'],data['total_sqft'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(location,total_sqft,bhk,bath)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__=="__main__":
    print("Starting Python Flask Server for House Price prediction")
    util.load_saved_artifacts()
    cors.init_app(app)
    app.run(port=os.environ.get('PORT', 3000))