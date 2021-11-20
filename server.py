from flask import Flask, app,request,jsonify
import util
import os
from flask_cors import CORS
app= Flask(__name__)
cors=CORS()

os.environ.get('PORT', 3000)

@app.route('/')
def hello_world():
    json_file = {}
    json_file['query'] = 'hello_world'
    return jsonify(json_file)

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