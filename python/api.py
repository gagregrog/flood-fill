from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS

from solution import handleFloodFill

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route('/', methods=['GET'])
def ping():
    return 'success'

@app.route('/flood', methods=['POST'])
def flood():
    """Handle the flood filling."""

    board = request.json['board']
    clickedItem = request.json['clickedItem']

    try:
        updatedBoard = handleFloodFill(board, clickedItem)
        if not updatedBoard:
            raise Exception('No board returned from handler')
    except Exception as e:
        print('There was an error with your algorithm.')
        print(str(e))

        return jsonify({'message': 'There was an error with your algorithm'})


    return jsonify({'board': updatedBoard})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)
