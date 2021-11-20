from flask import Flask, app,request,jsonify,url_for
import os
import pickle
import json
import numpy as np


__locations = None
__data_columns = None
__model = None

from flask_cors import CORS
app= Flask(__name__,static_folder="./static")
cors=CORS()

os.environ.get('PORT', 3000)

def get_estimated_price(location,sqft,bhk,bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index>=0:
        x[loc_index] = 1

    return round(__model.predict([x])[0],2)

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global  __data_columns
    global __locations

    # SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    # json_url = os.path.join(app.static_folder, "artifacts", "columns.json")
    # print(json_url)
    # with open(json_url,'r') as f:
    #     __data_columns=json.load(f)['data_columns']
    #     __locations = __data_columns[3:]
    # print(__locations)

    

    with open('./static/artifacts/columns.json', 'rb') as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]  # first 3 columns are sqft, bath, bhk

    global __model
    if __model is None:
        with open('./static/artifacts/banglore_home_prices_model.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")



def get_data_columns():
    return __data_columns

@app.route('/')
def hello_world():
    json_file = {}
    json_file['query'] = 'hello_world'
    return jsonify(json_file)

@app.route('/get_location_names',methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': __locations
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
        'estimated_price': get_estimated_price(location,total_sqft,bhk,bath)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__=="__main__":
    print("Starting Python Flask Server for House Price prediction")
    load_saved_artifacts()
    cors.init_app(app)
    app.run(port=os.environ.get('PORT', 3000))